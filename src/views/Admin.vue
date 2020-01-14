<template>
    <div>
		<el-container>
			<el-header>crm客户关系管理系统</el-header>
			<el-container>
				
				<el-aside width="200px">
				   <span style="background-color: #D9EDF7; display: block;" >客户关系管理系统</span>
					<el-menu default-active="2" router class="el-menu-vertical-demo"  background-color="#F5F5F5"
					 text-color="#2B3142" active-text-color="#ffd04b">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-edit"></i>
								<span>营销管理</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="/admin/saleChanceList">销售机会管理</el-menu-item>
								<el-menu-item index="/admin/salePlanList">客户开发计划</el-menu-item>							
							</el-menu-item-group>													
						</el-submenu>

						<el-submenu index="2">
							<template slot="title">
								<i class="el-icon-edit"></i>
								<span>客户管理</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="/admin/clientServerList">客户信息管理</el-menu-item>
								<el-menu-item index="/admin/clientReprieveLoseList">客户流失管理</el-menu-item>					
							</el-menu-item-group>													
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main id="main">
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<style>
	html,
	body {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}

	.el-header,
	.el-footer {
		background-color: #438EB9;
		color: white;
		text-align: center;

		line-height: 60px;
		font-family: "bodoni mt";

	}

	.el-header {
		text-align: left;
	}


	.el-aside {
		background-color: #FFFFFF;
		color: #333;
		text-align: center;
		line-height: 50px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	 
</style>
