<template>
  <div class="mainbox">
    <div class="pl15 pr15 pt20 color-white">
      <collitems title="自发自用">
        <div class="p15">
          <div class="flex flex-around">
            <div class="flex align-items-center wid-200">
              <div class="pr15">平电价</div>
              <div class="b-a-1 line-color-main1">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </div>

            <div class="flex align-items-center">
              <div class="pr15">峰电价</div>
              <div class="b-a-1 line-color-main1">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </div>

            <div class="flex align-items-center">
              <div class="pr15">谷电价</div>
              <div class="b-a-1 line-color-main1">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </div>

            <div class="flex align-items-center">
              <div class="pr15">尖电价</div>
              <div class="b-a-1 line-color-main1">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </div>

            <div class="flex align-items-center">
              <div class="pr15">卖电价格</div>
              <div class="b-a-1 line-color-main1">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
            </div>

            <el-button type="primary">保存设置</el-button>
          </div>

          <div class="pt30">
            <div class="p15">
              <div class="flex align-items-center">
                <div class="flex align-items-center">
                  <div class="pr15">时间范围</div>
                  <div class="b-a-1 line-color-main1">
                    <el-time-select
                      placeholder="起始时间"
                      v-model="startTime"
                      :picker-options="{
                        start: '00:00',
                        step: '01:00',
                        end: '23:00',
                      }"
                    >
                    </el-time-select>
                  </div>
                  <div class="b-a-1 line-color-main1">
                    <el-time-select
                      placeholder="结束时间"
                      v-model="endTime"
                      :picker-options="{
                        start: '00:00',
                        step: '01:00',
                        end: '23:30',
                        minTime: startTime,
                      }"
                    >
                    </el-time-select>
                  </div>
                </div>

                <div class="pl30">
                  <div class="flex align-items-center">
                    <div class="pr30">类型</div>
                    <div class="b-a-1 line-color-main1">
                      <el-select v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </div>

                <div class="flex">
                  <div class="boxrows add" @click="addtime">
                    <i class="el-icon-plus" />
                  </div>
                  <div class="boxrows dels">
                    <i class="el-icon-minus" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </collitems>

      <collitems title="充放电时段参数">
        <div class="p15">
          <div class="b-a-1 line-color-main1"></div>
        </div>
      </collitems>

      <collitems title="削峰填谷">
        <div class="p15"></div>
      </collitems>
      <collitems title="通用远程设置">
        <div class="p15"></div>
      </collitems>
    </div>
  </div>
</template>

<script>
import collitems from "../transtaion/components/collitems.vue";
export default {
  components: {
    collitems,
  },
  data() {
    return {
      imglist: [
        "https://img0.baidu.com/it/u=1825439388,2560820608&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=383",
        "https://img0.baidu.com/it/u=218098408,2284035082&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=458",
        "https://img2.baidu.com/it/u=1613428194,881886065&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334",
      ],
      zclist: [
        {
          xh: 1,
          zcmc: "EMS",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 2,
          zcmc: "PCS",
          zcbm: 2100,
          sbsl: 1,
        },
        {
          xh: 3,
          zcmc: "集控",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 4,
          zcmc: "电池堆",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 5,
          zcmc: "电池簇",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 6,
          zcmc: "光伏逆变器",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 7,
          zcmc: "关口电表",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 8,
          zcmc: "光伏并网点电表",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 9,
          zcmc: "ACDC",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 10,
          zcmc: "DCDC",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 11,
          zcmc: "空调",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 12,
          zcmc: "消防",
          zcbm: 2000,
          sbsl: 2,
        },
      ],
      input: "",
      startTime: "",
      endTime: "",
      options: [
        {
          value: "选项1",
          label: "谷时段",
        },
        {
          value: "选项2",
          label: "峰时段",
        },
        {
          value: "选项3",
          label: "平时段",
        },
      ],
      value: "",
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.mainbox {
  height: 830px;
  overflow-y: scroll;
}
.plant1 {
  width: 180px;
}

.wid-200 {
  width: 260px;
}

.boxrows {
  width: 30px;
  height: 30px;
  // background: #fff;

  line-height: 30px;
  text-align: center;
  margin-left: 50px;
}
.add {
  background-color: #7fb926;
}
.dels {
  background-color: red;
}
</style>