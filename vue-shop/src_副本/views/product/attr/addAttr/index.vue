<template>
    <div>
        <el-form ref="ruleFormRef" label-width="80px" :inline="true" size="default">
            <el-form-item label="属性名称" prop="tmName" v-if="attr">
                <el-input placeholder="请输入属性名称" v-model="attr.attrName"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" size="default" @click="addCategory" icon="Plus" :disabled="disabled">添加属性值</el-button>
        <div v-if="attr">
            <el-table :data="attr.attrValueList" border stripe style="margin-top: 20px;margin-bottom: 20px;"
                max-height="600px">
                <el-table-column label="序号" width="80px" align="center" type="index">
                </el-table-column>
                <el-table-column label="属性值名称" align="center">
                    <template #="{ row, $index }">
                        <el-input v-model="row.valueName" placeholder="请输入属性值名称" size="normal" clearable
                            @change=""></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="属性值操作" align="center">
                    <template #="{ row, $index }">
                        <el-button type="primary" size="small" icon="Delete"
                            @click="deleteCategory(row, $index)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-button type="primary" size="default" @click="saveCategory" :disabled="saveDisabled">保存</el-button>
        <el-button type="primary" size="default" @click="cancel">取消</el-button>
    </div>
</template>

<script setup lang="ts">
import { reqDeleteAttr, reqSaveAttrInfo } from '@/api/product/attr';
import type { Category, AttrData, AttrValueData } from '@/api/product/attr/types';
import { ref, defineEmits } from 'vue'
import { ElMessage } from 'element-plus'
const props = defineProps(
    {
        "attr": {
            type: Object,
        },
    })



const emits = defineEmits(["cancel", "update",],)

let disabled = ref(true);
let saveDisabled = ref(true);

onMounted(() => {
    watch(props.attr!, () => {
        disabled.value = props.attr!.attrName.length == 0;
    })

    watch(props.attr!, () => {
        saveDisabled.value = (props.attr!.attrValueList.length < 1) || disabled.value;
    })

})

const addCategory = () => {
    let value = <AttrValueData>({});
    props.attr!.attrValueList.push(value);
};

const deleteCategory = (row: AttrValueData, index: number) => {
    props.attr!.attrValueList.splice(index, 1);
}

const saveCategory = async () => {
    try {
        let reslut = await reqSaveAttrInfo(props.attr as AttrData);
        if (reslut.code == 200) {
            emits("update");
            ElMessage.success("属性保存成功");
        } else {
            ElMessage.error("属性保存失败");
        }
    } catch (error) {
        ElMessage.error("属性保存失败");
    }
};

const cancel = () => {
    emits("cancel");
}

</script>

<script lang="ts">
export default {
    attrName: 'AddAttr',
}
</script>



<style  lang="scss" scoped></style>

