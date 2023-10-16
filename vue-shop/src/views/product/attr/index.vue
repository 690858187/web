<template>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
        <el-form :inline="true">
            <el-form-item label="一级分类">
                <el-select v-model="categorysValue1" @change="categorys1Change" :disabled="showEdit">
                    <el-option v-for="item in categorys1" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="二级分类">
                <el-select v-model="categorysValue2" @change="categorys2Change" :disabled="showEdit">
                    <el-option v-for="item in categorys2" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="三级分类">
                <el-select v-model="categorysValue3" @change="categorys3Change" :disabled="showEdit">
                    <el-option v-for="item in categorys3" :key="item.id" :label="item.name" :value="item.id"
                        :attrName="attrName"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </el-card>

    <el-card shadow="always" :body-style="{ padding: '20px' }" style="margin-top: 10px;">
        <div v-if="!showEdit">
            <el-button type="primary" size="default" @click="addOrSaveCategory" icon="Plus"
                :disabled="!canAdd">添加平台属性</el-button>
            <el-table :data="attrArr" border stripe style="margin-top: 20px;margin-bottom: 20px;" max-height="600px">
                <el-table-column label="序号" width="80px" align="center" type="index">
                </el-table-column>
                <el-table-column label="属性名称" align="center" prop="attrName">

                </el-table-column>
                <el-table-column label="属性值名称" align="center">
                    <template #="{ row, $index }">
                        <el-tag v-for="item in row.attrValueList" :key="item.id" style="margin-right: 5px;">
                            {{ item.valueName }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template #="{ row, $index }">
                        <el-button type="primary" size="small" @click="addOrSaveCategory(row)" icon="Edit"></el-button>
                        <!-- 删除提示 -->
                        <el-popconfirm :title="`你确认删除${row.attrName}属性吗?`" @confirm="deleteAttar(row)" icon="Delete"
                            width="200px">
                            <template #reference>
                                <el-button type="primary" size="small" icon="Delete"></el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <AddAttr v-if="showEdit" :attr="attrData" @cancel="cancelCategory" @update="updateCategory">
        </AddAttr>
    </el-card>
</template>

<script setup lang="ts">
import { reqGetCategory1, reqGetCategory2, reqGetCategory3, reqGetAttrInfoList, reqDeleteAttr } from '@/api/product/attr';
import type { Category, AttrData, AttrValueData } from '@/api/product/attr/types';
import { ElMessage } from 'element-plus'
import AddAttr from './addAttr/index.vue'


let columns = ref([{ id: 1, label: "1111" }, { id: 2, label: "2222" }, { id: 3, label: "3333" }, { id: 4, label: "4444" }]);

let categorys1 = ref<Category[]>([]);
let categorysValue1 = ref<number>();

let categorys2 = ref<Category[]>([]);
let categorysValue2 = ref<number>();

let categorys3 = ref<Category[]>([]);
let categorysValue3 = ref<number>();

let attrArr = ref<AttrData[]>([]);
///编辑时候选中的属性
let attrData = ref<AttrData>();
let attrName = ref('');
//控制是否可以添加
let canAdd = ref(false)
//控制编辑是否显示
let showEdit = ref(false)

onMounted(async () => {

    watch([categorysValue1, categorysValue2, categorysValue3], (newValue, oldValue) => {
        canAdd.value = !(categorysValue1.value == undefined || categorysValue2.value == undefined || categorysValue3.value == undefined);
    });

    try {
        let reslut = await reqGetCategory1();
        categorys1.value = reslut.data;
        if (reslut.code == 200) {
            ElMessage.success("一级分类数据获取成功");
        } else {
            ElMessage.error("一级分类数据获取失败");
        }
    } catch (error) {
        ElMessage.error("一级分类数据获取失败");
    }

})

const categorys1Change = async (value: any) => {
    try {
        categorysValue2.value = undefined;
        categorysValue3.value = undefined;
        categorys2.value.length = 0;
        categorys3.value.length = 0;
        attrArr.value.length = 0;
        let reslut = await reqGetCategory2(value);
        categorys2.value = reslut.data;
        if (reslut.code == 200) {
            ElMessage.success("二级分类数据获取成功");
        } else {
            ElMessage.error("二分类数据获取失败");
        }
    } catch (error) {
        ElMessage.error("二分类数据获取失败");
    }

}

const categorys2Change = async (value: any) => {
    try {
        categorysValue3.value = undefined;
        categorys3.value.length = 0;
        attrArr.value.length = 0;
        let reslut = await reqGetCategory3(value);
        categorys3.value = reslut.data;
        if (reslut.code == 200) {
            ElMessage.success("三分类数据获取成功");
        } else {
            ElMessage.error("三分类数据获取失败");
        }
    } catch (error) {
        ElMessage.error("三分类数据获取失败");
    }

}

const categorys3Change = async () => {
    try {
        attrArr.value.length = 0;
        let reslut = await reqGetAttrInfoList(categorysValue1.value!, categorysValue2.value!, categorysValue3.value!);
        attrArr.value = reslut.data;
        if (reslut.code == 200) {
            ElMessage.success("商品属性获取成功");
        } else {
            ElMessage.error("商品属性获取失败");
        }
    } catch (error) {
        ElMessage.error("商品属性获取失败");
    }

}


///删除属性
const deleteAttar = async (value: AttrData) => {
    try {
        let reslut = await reqDeleteAttr(value.id!);
        if (reslut.code == 200) {
            ElMessage.success("属性删除成功");
            categorys3Change();
        } else {
            ElMessage.error("属性删除失败");
        }
    } catch (error) {
        ElMessage.error("属性删除失败");
    }

}

//添加属性
const addOrSaveCategory = (value = <AttrData>({})) => {
    showEdit.value = true;
    if (value.id == undefined) {
        let attr = <AttrData>({
            attrValueList: [],
            attrName: '',
            categoryId: categorysValue3.value,
            categoryLevel: 3,
        });
        value.attrName = attrName.value;
        ///解除父组件和子组件的数据双向绑定
        attrData.value = JSON.parse(JSON.stringify(attr));
    } else {
        attrData.value = JSON.parse(JSON.stringify(value));
    }
}

const cancelCategory = () => {
    showEdit.value = !showEdit;
}

const updateCategory = () => {
    showEdit.value = !showEdit;
    categorys3Change();
}

</script>

<style  lang="scss" scoped></style>