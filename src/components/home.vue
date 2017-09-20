<template>
	<div class="home">
		<div class="search">
			<el-input
			  placeholder="请输入要搜索的内容"
			  icon="search"
			  v-model="search"
			  :on-icon-click="handleIconClick">
			</el-input>
		</div>
		<div class="single-user">
			<el-table :data="filterUsers" style="width: 100%">

			 	  <el-table-column type="selection" width="55">
    			  </el-table-column>
			      <el-table-column
			        prop="name"
			        label="姓名">
			      </el-table-column>
			      <el-table-column
			        prop="region"
			        label="区域">
			      </el-table-column>
			       <el-table-column
			        prop="phoen"
			        label="手机">
			      </el-table-column>
			       <el-table-column
			        prop="email"
			        label="邮箱">
			      </el-table-column>

			      <el-table-column label="操作">
			         <template scope="scope" v-for="item in users">
				          <el-button
				          size="small"
				          @click="handleEdit(scope.$index, users)">
					          <router-link :to="'/details/'+item.id">编辑
					          </router-link>
				          </el-button>
				        <el-button
				          size="small"
				          type="danger"
				          @click.native.prevent="handleDelete(scope.$index, users)">删除</el-button>
			        </template>
			      </el-table-column>
    		</el-table>

		</div>
		
	</div>
		
</template>

<script >
	export default {
		name:'home',
		data(){
			return{
				search:'',
				users:[]
			}
		},
		created(){
			this.$http.get('https://admin-ecccf.firebaseio.com/posts.json').then(function(data){
					 // console.log(data)
					return data.json()
			}).then(function(data){
				let userArr = [];
				for(let key in data){
					/*区key做id*/
					data[key].id = key;
					 console.log(data[key].id)
					userArr.unshift(data[key]);
					
				}
				 this.users = userArr;
			})

		},
		computed:{
		  	filterUsers:function(){
		  		return this.users.filter((users) =>{
		  			return users.name.match(this.search);
		  		})
		  	}
		},
		methods:{
			handleIconClick(ev) {
			      console.log(ev);
			},
			handleEdit(index, rows) {
	        	console.log(index, rows);
		      },
		    handleDelete(index, rows) {
		        rows.splice(index, 1);
		    }
		}

	}
</script>

<style scoped>
.search {
	margin: 20px auto;
	text-align: center;
	width: 60%;

}
    
</style>