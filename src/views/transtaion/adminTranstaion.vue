<template>
  <div>
    <div class="color-white pt40 pl15 pr15">
      <div class="p15 flex align-items-center flex-between widthlist">
        <div class="text-right widthlist1">电站名称：</div>
        <div class="b-a-1 line-color-main2">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>

      <div class="p15 flex flex-between">
        <div class="p15 flex align-items-center flex-between">
          <div class="text-right widthlist1">行政区域 :</div>
          <div class="ml50 b-a-1 line-color-main2">
            <!-- 级联选择 -->
            <div class="flex">
              <!-- 省 -->
              <el-select
                class="bg-bgcardcolor"
                v-model="value"
                placeholder="请选择省"
                @change="changeproview"
              >
                <el-option
                  v-for="item in anysityList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.indexlit"
                >
                </el-option>
              </el-select>

              <!-- 市 -->
              <el-select
                class="bg-bgcardcolor"
                v-model="value2"
                placeholder="请选择市"
                @change="changechengshi"
              >
                <el-option
                  v-for="item in chengshiList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.indexlit"
                >
                </el-option>
              </el-select>

              <!-- 市 -->
              <el-select
                class="bg-bgcardcolor"
                v-model="value3"
                placeholder="请选择区"
                @change="changequ"
              >
                <el-option
                  v-for="item in quList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.indexlit"
                >
                </el-option>
              </el-select>
            </div>
          </div>
        </div>

        <!-- <div class="plant1">邮编 : <span>134567</span></div> -->
      </div>
      <div class="p15 flex align-items-center flex-between widthlist">
        <div class="text-right widthlist1">详细地址:</div>
        <div class="b-a-1 line-color-main2">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>

      <div class="p15 flex align-items-center flex-between widthlist">
        <div class="text-right widthlist1">场站ID :</div>
        <div class="b-a-1 line-color-main2">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="p15 flex align-items-center flex-between widthlist">
        <div class="text-right widthlist1">投运状态:</div>
        <div class="">
          <el-radio v-model="radio" label="1">投运</el-radio>
          <el-radio v-model="radio" label="2">规划中</el-radio>
        </div>
      </div>

      <div class="p15 flex widthlist33 flex-between">
        <div class="flex align-items-center flex-between widthlist">
          <div class="text-right widthlist1">经度 :</div>
          <div class="b-a-1 line-color-main2">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>

        <div class="flex align-items-center flex-between widthlist">
          <div class="text-right widthlist1">纬度 :</div>
          <div class="b-a-1 line-color-main2">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </div>

      <div class="p15 flex widthlist33 flex-between">
        <div class="flex align-items-center flex-between widthlist">
          <div class="text-right widthlist1">总装机功率 :</div>
          <div class="b-a-1 line-color-main2">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <!-- <div>KW</div> -->
        </div>

        <div class="flex align-items-center flex-between widthlist">
          <div class="text-right widthlist1">装机容量 :</div>
          <div class="b-a-1 line-color-main2">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <!-- <div>KWh</div> -->
        </div>
      </div>

      <div class="p15">
        <div class="pl15 pb20">电站主图</div>
        <div class="flex flex-between">
          <div
            class="p15 b-a-1 line-color-main2 relative flex-1"
            v-for="(item, index) in imglist"
            :key="index"
          >
            <el-image
              :src="item"
              class="width-full height"
              fit="cover"
            ></el-image>
            <!-- 关闭按钮 -->
            <div
              class="absolute right5 top p10 bg-main1 br50"
              @click="deletepic(index)"
            >
              <i class="el-icon-close" />
            </div>
          </div>

          <div
            v-if="imglist.length < 3"
            class="p15 b-a-1 line-color-main2 relative flex-1"
          >
            <input
              class="upinput absolute"
              @change="showimg"
              ref="file"
              type="file"
            />
            <div class="absolute axis-center">
              <i class="fs20 el-icon-upload2" /> 上传
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chinamaps from "/static/json/map/100000.json";
import cityMap from "@/utils/china-main-city-map.js";
export default {
  data() {
    return {
      input: "",
      radio: "1",
      value: "",
      value2: "",
      value3: "",
      anysityList: [], //省级的数据
      chengshiList: [], //市级的数据
      quList: [], // 区级数据
      sheng: "",
      shi: "",
      qu: "",
      imglist: [
        "https://img0.baidu.com/it/u=1825439388,2560820608&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=383",
        "https://img0.baidu.com/it/u=218098408,2284035082&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=458",
        "https://img2.baidu.com/it/u=1613428194,881886065&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334",
      ],
    };
  },
  created() {
    this.anysityList = this.initDataList(chinamaps);
  },
  methods: {
    changeproview(e) {
      let name = this.anysityList[e].name;
      this.sheng = name;
      let cityId = cityMap[name];
      if (cityId) {
        //代表有下级地图
        let response = require(`/static/json/map/${cityId}.json`);
        this.chengshiList = this.initDataList(response);
      }
      this.value2 = "";
      this.value3 = "";
    },
    // 选择市级以后的
    changechengshi(e) {
      // console.log(e, "市级下面的数据");
      let name = this.chengshiList[e].name;
      this.shi = name;
      let cityId = cityMap[name];
      if (cityId) {
        //代表有下级地图
        let response = require(`/static/json/map/${cityId}.json`);
        this.quList = this.initDataList(response);
      } else {
        this.quList = [];
      }
      this.value3 = "";
    },
    // 选择区
    changequ(e) {
      let name = this.chengshiList[e].name;
      this.qu = name;
    },
    // 原生态喂养，贴近大海。
    initDataList(datain) {
      let a = [];
      datain.features.forEach((item, index) => {
        a.push({
          id: item.id,
          name: item.properties.name,
          listlength: item.properties.childNum,
          cp: item.properties.cp,
          indexlit: index,
        });
      });
      return a;
    },
    // 删除图片
    deletepic(index) {
      this.imglist.splice(index, 1);
    },
    showimg(file) {
      console.log(file.target.files[0], "file");
      let fileObj = file.target.files[0];
      let formData = new FormData();
      formData.append("file", fileObj);
      formData.append("name", fileObj.name);

      // formData  是需要在接口里上传 的
    },
  },
};
</script>

<style scoped lang="scss" >
.widthlist {
  width: 350px;
  .widthlist1 {
    width: 100px;
  }
}
.widthlist33 {
  width: 800px;
}
.width-1200 {
  width: 800px;
}

.upinput {
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 100;
}
</style>