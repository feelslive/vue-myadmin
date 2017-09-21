<template>
	<div class="Edit">
	<h3>编辑用户</h3>
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
			<el-button type="primary" @click.prevent="updateSubmitForm('numberValidateForm')">保存</el-button>
    	  </el-form-item>
		</el-form>
	</div>
</template>

<script >
	export default {
		data(){
			return {
				formLabelAlign: {
		          name: '',
		          region: '',
		          phoen: '',
		          email: ''
		        },
		        id:this.$route.params.id,
			}
		},
		created(){
			this.fetchForm(this.$route.params.id)
		},
		methods:{
			fetchForm(id){
				this.$http.get("https://admin-ecccf.firebaseio.com/posts/"+ id + ".json").then(function(data){
					// console.log(data.body)
					this.formLabelAlign = data.body
				})
			},
			/*提交信息*/
			updateSubmitForm(formName){
				this.$refs[formName].validate((valid) => {
		          if (valid) {
				      this.$http.put("https://admin-ecccf.firebaseio.com/posts/"+this.$route.params.id+".json",this.formLabelAlign)
				          .then(function(data){
				            // console.log(data);
				            this.success();
				            this.$router.push({path:'/'})
				          });
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
			},
			/*添加成功*/
			success() {
		        this.$message({
		          message: '更新成功',
		          type: 'success'
		        });
		    }
		}

	}
</script>

<style lang="less" scoped>
    .Edit {
	width: 80%;
	margin: 0 auto;
	&>h3 {
		text-align: center;
		margin: 10px 0;
	}
}
.demo-ruleForm {
	margin-top: 50px;
}
	.el-form-item {
		margin: 22px 0;
	}
</style>