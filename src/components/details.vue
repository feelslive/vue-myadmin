<template>
<div class="details">
	<div class="danger">
		<el-button type="danger" @click="deletesuccess()">删除</el-button>
		<router-link :to="'/Edit/'+this.id">
			<el-button type="info" class="info">
				编辑
			</el-button>
		</router-link>
	</div>
	
	<ul>
		<li>名称：{{user.name}}</li>
		<li>区域：{{user.region}}</li>
		<li>手机：{{user.phoen}}</li>
		<li>邮箱：{{user.email}}</li>
	</ul>
</div>
	
</template>

<script >
	export default {
		data(){
			return{
				id:this.$route.params.id,
				user:{}
			}
		},
		created(){
			this.$http.get("https://admin-ecccf.firebaseio.com/posts/"+ this.id + ".json").then(function(data){
					this.user = data.body
					// console.log(this.user)
			})
		},
		methods:{
		    deletesuccess() {
		        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		        	this.handleDelete()
		          this.$message({
		            type: 'success',
		            message: '删除成功!'
		          });
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消删除'
		          });          
		        });
		    },
			handleDelete() {
		        this.$http.delete("https://admin-ecccf.firebaseio.com/posts/"+ this.id + ".json").then(function(res){
		        	this.$router.push({path:"/"})
		        })
		    }
		}
	}
</script>

<style lang="less" scoped>
    .details {
    	width: 80%;
    	margin: 20px auto;
    	.danger {
    		overflow: hidden;
    		a {
    			display: block;
    		}
    		.el-button {
    			float: right;
    		}
    		.info {
    			margin-right: 20px;
    		}
    	}
    	li {
    		margin: 10px 0;
    		padding: 10px 0;
    		border-bottom: 1px solid #ccc;
    	}
    }
</style>