<template>
	<div class="add">
		<el-form label-width="80px" ref="numberValidateForm" :model="formLabelAlign" class="demo-ruleForm">
		  <el-form-item label="姓名" prop="name" :rules="[{ required: true, message: '姓名不能为空'}]">
		    <el-input v-model="formLabelAlign.name" type="name"></el-input>
		  </el-form-item>
		  <el-form-item label="区域" prop="region" :rules="[{ required: true, message: '区域不能为空'}]">
		    <el-input v-model="formLabelAlign.region" type="region"></el-input>
		  </el-form-item>
		  <el-form-item label="手机" prop="phoen" :rules="[{ required: true, message: '手机不能为空'}]">
		    <el-input v-model="formLabelAlign.phoen" type="phoen"></el-input>
		  </el-form-item>
		  <el-form-item label="邮箱" prop="email" :rules="[{ required: true, message: '邮箱不能为空'}]">
		    <el-input v-model="formLabelAlign.email" type="email"></el-input>
		  </el-form-item>
		  <el-form-item>
			<el-button type="primary" @click.prevent="submitForm('numberValidateForm')">提交</el-button>
	    	<el-button @click.prevent="formkong()">重置</el-button>
    	  </el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default {
		name:'add',
		data(){
			return {
				formLabelAlign: {
		          name: '',
		          region: '',
		          phoen: '',
		          email: ''
		        }
			}
		},
		methods:{
			/*提交信息*/
			submitForm(formName){
				this.$refs[formName].validate((valid) => {
		          if (valid) {
				      this.$http.post("https://admin-ecccf.firebaseio.com/posts.json",this.formLabelAlign)
				          .then(function(data){
				            console.log(data);
				            this.success();
				            this.$router.push({path:'/'})
				            // this.formkong();
				          });
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
			},
			/*重置*/
			resetForm(numberValidateForm){
				 console.log(this.$refs[numberValidateForm])
				 this.$refs[numberValidateForm].resetFields();
			
			},
			/*清空数据*/
			formkong(){
				this.formLabelAlign = '';
			},
			/*添加成功*/
			success() {
		        this.$message({
		          message: '添加成功',
		          type: 'success'
		        });
		    }
		}

	}
	
</script>
<style scoped>
.add {
	width: 80%;
	margin: 0 auto;
}
.demo-ruleForm {
	margin-top: 50px;
}
	.el-form-item {
		margin: 22px 0;
	}
</style>