<template>
  <v-app>
    <div class="hello">
      <h1>崩壞三傷害倍率計算機</h1>
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>爆擊率計算</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <!--計算爆擊率-->
                    <v-layout row wrap>
                      <v-flex xs12 sm6 md6>
                        <v-text-field
                          key="critical"
                          label="會心"
                          type="number"
                          mask="###"
                          v-model.number="critical"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md6>
                        <v-text-field
                          key="level"
                          label="等級"
                          type="number"
                          mask="##"
                          v-model.number="level"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-spacer></v-spacer>
                    <h2 style="text-align: right;">爆擊率：{{ (critical/(75+level*5)).toFixed(4)*100 }}%</h2>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>傷害增益</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tabs
                    slot="extension"
                    v-model="tab"
                    color="primary"
                    grow
                  >
                    <v-tabs-slider color="yellow"></v-tabs-slider>
            
                    <v-tab
                      v-for="item in items"
                      :key="item"
                    >
                      {{ item }}
                    </v-tab>
                  </v-tabs>
                </v-toolbar>
                <v-tab-item
                  :id="tab-0"
                  key="tab-1"
                >
                <v-card flat>
            <v-card-text>ASDASDasd</v-card-text>
          </v-card>
                </v-tab-item>
                <v-tab-item
                  :id="tab-1"
                  key="tab-2"
                >
                <v-card flat>
            <v-card-text>!@#@!#!123</v-card-text>
          </v-card>
                </v-tab-item>
              <v-card-text>
                <v-form>
                  <!--計算傷害倍率-->
                  <v-layout row wrap>
                    <v-flex xs12 sm6 md6>
                      <v-text-field
                        key="attack"
                        label="攻擊力"
                        type="number"
                        mask="####"
                        v-model.number="attack"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field
                        key="mult"
                        label="技能倍率(%)"
                        type="number"
                        mask="####"
                        v-model.number="multiplier"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field
                        label="物理/元素增傷(%)"
                        type="number"
                        mask="###"
                        v-model.number="physical_damage"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field
                        label="物理/元素易傷(%)"
                        type="number"
                        mask="###"
                        v-model.number="physical_damage_yi"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field
                        label="全傷害增傷(%)"
                        type="number"
                        mask="###"
                        v-model.number="all_damage"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field
                        label="全傷害易傷(%)"
                        type="number"
                        mask="###"
                        v-model.number="all_damage_yi"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field
                        label="爆擊率(%)"
                        type="number"
                        
                        v-model.number="critical_rate"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field
                        label="爆擊增傷(%)"
                        type="number"
                        mask="###"
                        hint="此為增加的爆擊傷害, 基礎爆擊傷害為200% (無增傷則填0)"
                        v-model.number="critical_damage"
                      ></v-text-field>
                    </v-flex>
                    <!--傷害*爆擊率＋傷害*(1-爆擊率)=平均傷害期望值-->
                  </v-layout>
                  <h2 style="text-align: right;">
                    傷害倍率：{{ ((1+physical_damage/100)*(1+physical_damage_yi/100)*(1+all_damage/100)*(1+all_damage_yi/100)*(critical_rate/100)*(2+critical_damage/100)
                               +(1+physical_damage/100)*(1+physical_damage_yi/100)*(1+all_damage/100)*(1+all_damage_yi/100)*(1-critical_rate/100)).toFixed(4) }}</h2>
                  <h2 style="text-align: right;">
                    平均傷害：{{ (attack*(multiplier/100)*(1+physical_damage/100)*(1+physical_damage_yi/100)*(1+all_damage/100)*(1+all_damage_yi/100)*(critical_rate/100)*(2+critical_damage/100)
                               +(1+physical_damage/100)*(1+physical_damage_yi/100)*(1+all_damage/100)*(1+all_damage_yi/100)*(1-critical_rate/100)).toFixed(2) }}</h2>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      attack: 1,
      multiplier: 100,
      critical: 0,
      level: 80,
      physical_damage: 0,
      physical_damage_yi: 0,
      all_damage: 0,
      all_damage_yi: 0,
      critical_rate: 0,
      critical_damage: 0,
      tab: null,
      items: [
        '物理傷害','元素傷害'
      ]
    }
  },
  methods: {
    countCriticalRate: (cri,level) => {
      return cri/(75+level*5)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
