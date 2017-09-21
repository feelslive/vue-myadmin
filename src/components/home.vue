<template>
	<div class="home" >
		<div class="search">
			<el-input
			  placeholder="请输入要搜索的内容"
			  icon="search"
			  v-model="search"
			  :on-icon-click="handleIconClick">
			</el-input>
		</div>
		<div class="single-user">
			<el-table v-loading="loading" :data="filterUsers" style="width: 100%">
			 	  <el-table-column type="selection" width="55" >
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
			         <template scope="scope">
				           <router-link :to="'/details/'+users[scope.$index].id" class='detailsbtn'><el-button
				          size="small"
				          @click="handleEdit(scope.$index, users)">
					         详情
					          
				          </el-button></router-link>
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
				users:[],
				loading: true
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
					userArr.unshift(data[key]);
					
				}
				 this.loading= false;
				 this.users = userArr;
			},function(err){
				console.log(err)
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
		      }
		}

	}
</script>

<style lang="less" scoped>
.el-loading-mask {
	top: 235px!important;
	height: 0!important;
}
.search {
	margin: 20px auto;
	text-align: center;
	width: 60%;

}

.detailsbtn {
	display: block;
}
    
</style>