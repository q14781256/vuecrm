<template>
  <div>
    <el-form :inline="true" :model="params" class="demo-form-inline">
      <el-form-item label="客户名称">
        <el-input v-model.trim="params.chanceCustName" size="small"></el-input>
      </el-form-item>
      <el-form-item label="概要">
        <el-input v-model.trim="params.chanceTitle" size="small"></el-input>
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model.trim="params.chanceLinkman" size="small"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="clear()" size="small">清空</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="select()" size="small">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="results"
      style="width: 80%;margin-bottom: 15px;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column prop="chanceId" label="编号" width="50px"></el-table-column>
      <el-table-column prop="chanceCustName" label="客户名称"></el-table-column>
      <el-table-column prop="chanceTitle" label="概要" width="200px"></el-table-column>
      <el-table-column prop="chanceLinkman" label="联系人" width="100px"></el-table-column>
      <el-table-column prop="chanceTel" label="联系人电话"></el-table-column>
      <el-table-column prop="chanceCreateDate" label="创建时间"></el-table-column>
      <el-table-column label="操作" width="230px">
        <template slot-scope="scope">
          <el-tag>指定计划</el-tag>
          <el-tag type="warning">执行计划</el-tag>
          <el-tag type="success">开发成功</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :total="total"
      :page-size="$store.state.maxPageNum"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageNum: 1,
      results: {},
      params: {
        //查询开发中状态数据
        chanceStatus: 1,
        chanceCustName: "",
        chanceTitle: "",
        chanceLinkman: ""
      },
      total: 0
    };
  },
  created() {
    this.fenye(1);
  },
  methods: {
    fenye(pageNum) {
      this.$fenye(
        "selectSaleInfoAllcount",
        "selectSaleInfoAll",
        this.params,
        pageNum,
        this.$store.state.maxPageNum,
        response => {
          console.log(response);
          console.log(response.data);
          this.results = response.data;
          this.total = response.totalRow;
        }
      );
    },
    handleCurrentChange(val) {
      this.fenye(val);
    },
    select() {
      this.fenye(1);
    },
    clear() {
      this.params.chanceCustName = "";
      this.params.chanceTitle = "";
      this.params.chanceLinkman = "";
    }
  }
};
</script>
<style scoped>
</style>