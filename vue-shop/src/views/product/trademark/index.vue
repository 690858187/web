<template>
    <el-card class="box-card">
        <!-- 添加按钮 -->
        <el-button type="primary" size="default" icon="Plus" @click="addTrademark">添加品牌</el-button>
        <!-- 表格 -->
        <el-table :data="trademarkArr" border stripe style="margin-top: 20px;margin-bottom: 20px;" max-height="600px">
            <el-table-column label="序号" width="80px" align="center" type="index">
            </el-table-column>
            <el-table-column label="品牌名称" align="center" prop="tmName">

            </el-table-column>
            <el-table-column label="品牌logo" align="center">
                <template #="{ row, $index }">
                    <img :src="row.logoUrl" alt="" style="width: 100px;height: 100px;">
                </template>
            </el-table-column>
            <el-table-column label="品牌操作" align="center">
                <template #="{ row, $index }">
                    <el-button type="primary" size="small" @click="updateTrademark(row)" icon="Edit"></el-button>
                    <!-- 删除提示 -->
                    <el-popconfirm :title="`你确认删除${row.tmName}品牌吗?`" @confirm="deleteTrademark(row)" icon="Delete"
                        width="200px">
                        <template #reference>
                            <el-button type="primary" size="small" icon="Delete"></el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 10, 15]" :small="true"
            :background="true" layout="prev, pager, next, jumper,->,sizes,total" :total="total"
            @size-change="handleSizeChange" @current-change="getTrademark" />
    </el-card>
    <!-- 对话框组件 -->
    <el-dialog :title="dialogFormTitle" :visible.sync="111" @close="" v-model="dialogFormVisible">
        <el-form ref="ruleFormRef" label-width="80px" :inline="false" size="default" :model="trademarkParams"
            :rules="rules">
            <el-form-item label="品牌名称" prop="tmName">
                <el-input placeholder="请输入品牌名称" v-model="trademarkParams.tmName"></el-input>
            </el-form-item>
            <el-form-item label="品牌LOGO" prop="logoUrl">
                <el-upload class="avatar-uploader" action="http://sph-api.atguigu.cn/admin/product/fileUpload"
                    :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="trademarkParams.logoUrl" :src="trademarkParams.logoUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>


            </el-form-item>
        </el-form>
        <template #footer>
            <el-button @click="cancel">取消</el-button>
            <el-button type="primary" @click="confirm">确定</el-button>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { reqDeleteTrademark, reqSaveOrUpdateTrademark, reqTrademark } from '@/api/product/trademark/index'
import type { TrademarkResposeData, Records, Trademark } from '@/api/product/trademark/types';
import { type UploadProps, ElMessage } from 'element-plus'
///当前页码
let pageNo = ref<number>(1);
///每页展示的数据条数
let limit = ref<number>(3);

//存储品牌数据总量
let total = ref<number>(0);

let trademarkArr = ref<Records>();

let dialogFormVisible = ref(false);
let dialogFormTitle = ref("添加品牌");

/// 添加或者更新的品牌
let trademarkParams = ref<Trademark>({
    tmName: '',
    logoUrl: '',
});

///获取el-form的组件实例
let ruleFormRef = ref();

const validatortmName = (rule: any, value: any, callBack: any) => {
    if (value.trim().length >= 2) {
        callBack();
    } else {
        callBack(new Error('品牌名称位数大于等于两位'));
    }
}


const validatortLogoUrl = (rule: any, value: any, callBack: any) => {
    if (value) {
        callBack();
    } else {
        callBack(new Error('LOGO图片务必上传'));
    }
}

/// 表单校验规则对象
const rules = reactive({
    tmName: [
        { required: true, validator: validatortmName }
        // { required: true, min: 2 }
    ],
    logoUrl: [
        { required: true, validator: validatortLogoUrl }
    ],
});



const addTrademark = () => {
    dialogFormTitle.value = "添加品牌";
    dialogFormVisible.value = true;
    ///清空收集的数据
    trademarkParams.value.tmName = "";
    trademarkParams.value.logoUrl = "";
    trademarkParams.value.id = undefined;
    ///第一种写法:ts问号的用法
    // formRef.value?.clearValidate('logotmNameUrl');
    // formRef.value?.clearValidate('logoUrl')
    ///第二种
    nextTick(() => {
        ruleFormRef.value.clearValidate('logotmNameUrl');
        ruleFormRef.value.clearValidate('logoUrl');
    })
}

const updateTrademark = (row: Trademark) => {
    dialogFormTitle.value = "修改品牌";
    dialogFormVisible.value = true;
    /// 清空校验规则的提示信息
    nextTick(() => {
        ruleFormRef.value.clearValidate('logotmNameUrl');
        ruleFormRef.value.clearValidate('logoUrl');
    })
    trademarkParams.value.tmName = row.tmName;
    trademarkParams.value.logoUrl = row.logoUrl;

}

const deleteTrademark = async (row: Trademark) => {
    let result = await reqDeleteTrademark(row.id!);
    if (result.code == 200) {
        ElMessage.success(row.tmName + "删除成功");
        getTrademark(trademarkArr.value!.length > 1 ? pageNo.value : pageNo.value - 1);
    } else {
        ElMessage.error(result.message);
    }
}

const getTrademark = async (pager = 1) => {
    pageNo.value = pager;
    let result: TrademarkResposeData = await reqTrademark(pageNo.value, limit.value);
    if (result.code == 200) {
        total.value = result.data.total;
        trademarkArr.value = result.data.records;
    } else {

    }
}

const handleSizeChange = (val: number) => {
    limit.value = val;
    getTrademark();
}

onMounted(() => {
    getTrademark();
})

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
    trademarkParams.value.logoUrl = response.data;
    ///图片上传成功,清除对应图片校验结果
    ruleFormRef.value.clearValidate('logoUrl');
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type == 'image/jpeg' || rawFile.type == 'image/png' || rawFile.type == 'image/gif') {
        if (rawFile.size / 1024 / 1024 > 4) {
            ElMessage.error('上传文件大小限制4M');
            return false;
        } else {
            return true;
        }
    } else {
        ElMessage.error('上传文件格式:PNG/JPG/GIF');
        return false;
    }
}

const cancel = () => {
    dialogFormVisible.value = false;
}

const confirm = async () => {
    /// 发请求之前要对整个表单进行校验t
    let formResult = await ruleFormRef.value.validate();
    let result = await reqSaveOrUpdateTrademark(trademarkParams.value)
    dialogFormVisible.value = false;
    if (result.code == 200) {
        ElMessage.success(trademarkParams.value.id ? '品牌修改成功' : '品牌添加成功')
        getTrademark(trademarkParams.value.id ? pageNo.value : 1);
    } else {
        ElMessage.success(trademarkParams.value.id ? '品牌修改失败' : '品牌添加失败')
    }
}

</script>

<style  lang="scss" scoped>
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>