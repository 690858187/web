<template>
    <div>
        <el-form ref="elForm" size="medium" label-width="100px">
            <el-form-item label="手机号" prop="mobile">
                <el-input placeholder="请输入手机号" :maxlength="11" show-word-limit clearable prefix-icon='el-icon-mobile'
                    :style="{ width: '100%' }"></el-input>
            </el-form-item>
            <el-form-item size="large">
                <el-button type="primary">提交</el-button>
                <el-button>重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">

</script>

<style  lang="scss" scoped></style>