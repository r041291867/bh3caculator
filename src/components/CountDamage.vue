<template>
  <div class="damage">
      <v-content v-if="Compare == false">
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>傷害增益</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn depressed small round color="info" dark @click="Switch">傷害比較</v-btn>
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
                <v-tabs-items v-model="tab">
                  <!--物理傷害欄位-->
                  <v-tab-item
                    :id="'tab-1'"
                    key="tab-1"
                  >
                    <v-card flat>
                     <v-card-text>
                <v-form>
                  <!--計算傷害倍率-->
                  <v-layout row wrap>
                    <v-flex xs5 sm5 md5>
                      <v-text-field
                        key="attack"
                        label="攻擊力"
                        type="number"
                        mask="####"
                        v-model.number="attack"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5 offset-xs1>
                      <v-text-field
                        key="mult"
                        label="技能倍率(%)"
                        type="number"
                        mask="####"
                        suffix="%"
                        v-model.number="multiplier"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5>
                      <v-text-field
                        label="物理增傷(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        v-model.number="physical_damage"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5 offset-xs1>
                      <v-text-field
                        label="物理易傷(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        v-model.number="physical_damage_yi"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5>
                      <v-text-field
                        label="全傷害增傷(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        v-model.number="all_damage"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5 offset-xs1>
                      <v-text-field
                        label="全傷害易傷(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        v-model.number="all_damage_yi"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5>
                      <v-text-field
                        label="爆擊率(%)"
                        type="number"
                        suffix="%"
                        v-model.number="critical_rate"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5 offset-xs1>
                      <v-text-field
                        label="爆擊增傷(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        hint="此為增加的爆擊傷害, 基礎爆擊傷害為200% (無增傷則填0)"
                        v-model.number="critical_damage"
                      ></v-text-field>
                    </v-flex>
                    <!--傷害*爆擊率＋傷害*(1-爆擊率)=平均傷害期望值-->
                  </v-layout>
                  <h2 style="text-align: right;">
                    傷害倍率：{{ physicalDamageMultiplier*100 }}%</h2>
                  <h2 style="text-align: right;">
                    平均傷害：{{ (attack*(multiplier/100)*physicalDamageMultiplier).toFixed(2) }}</h2>
                  </v-form>
                </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <!--元素傷害欄位-->
                  <v-tab-item
                    :id="'tab-2'"
                    key="tab-2"
                  >
                  <v-card flat>
                    <v-card-text>
                      <v-form>
                        <!--計算傷害倍率-->
                        <v-layout row wrap>
                          <v-flex xs5 sm5 md5>
                            <v-text-field
                              key="attack"
                              label="攻擊力"
                              type="number"
                              mask="####"
                              v-model.number="attack"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5 offset-xs1>
                            <v-text-field
                              key="mult"
                              label="技能倍率(%)"
                              type="number"
                              mask="####"
                              suffix="%"
                              v-model.number="multiplier"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5>
                            <v-text-field
                              label="元素增傷(%)"
                              type="number"
                              mask="###"
                              suffix="%"
                              v-model.number="element_damage"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5 offset-xs1>
                            <v-text-field
                              label="元素易傷(%)"
                              type="number"
                              mask="###"
                              suffix="%"
                              v-model.number="element_damage_yi"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5>
                            <v-text-field
                              label="全傷害增傷(%)"
                              type="number"
                              mask="###"
                              suffix="%"
                              v-model.number="all_damage"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5 offset-xs1>
                            <v-text-field
                              label="全傷害易傷(%)"
                              type="number"
                              mask="###"
                              suffix="%"
                              v-model.number="all_damage_yi"
                            ></v-text-field>
                          </v-flex>
                          <!--傷害*爆擊率＋傷害*(1-爆擊率)=平均傷害期望值-->
                        </v-layout>
                        <h2 style="text-align: right;">
                          傷害倍率：{{ elementDamageMultiplier*100 }}%</h2>
                        <h2 style="text-align: right;">
                          平均傷害：{{ (attack*(multiplier/100)*elementDamageMultiplier).toFixed(2) }}</h2>
                        </v-form>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <!----------------------以下為傷害對比---------------------->
      <v-content v-else>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>傷害增益比較</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn depressed small round color="info" dark @click="Switch">取消比較</v-btn>
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
                <v-tabs-items v-model="tab">
                  <!--物理傷害欄位-->
                  <v-tab-item
                    :id="'tab-1'"
                    key="tab-1"
                  >
                    <v-card flat>
                     <v-card-text>
                <v-form>
                  <!--計算傷害倍率-->
                  <v-layout row wrap>
                    <v-flex xs5 sm5 md5>
                      <v-text-field
                        key="attack"
                        label="攻擊力#1"
                        type="number"
                        mask="####"
                        v-model.number="attack"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5 offset-xs1>
                      <v-text-field
                        key="attack"
                        label="攻擊力#2"
                        type="number"
                        mask="####"
                        v-model.number="attack_c"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5>
                      <v-text-field
                        key="mult"
                        label="技能倍率#1(%)"
                        type="number"
                        mask="####"
                        suffix="%"
                        v-model.number="multiplier"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5 offset-xs1>
                      <v-text-field
                        key="mult"
                        label="技能倍率#2(%)"
                        type="number"
                        mask="####"
                        suffix="%"
                        v-model.number="multiplier_c"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5>
                      <v-text-field
                        label="物理增傷#1(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        v-model.number="physical_damage"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5 offset-xs1>
                      <v-text-field
                        label="物理增傷#2(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        v-model.number="physical_damage_c"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5>
                      <v-text-field
                        label="物理易傷#1(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        v-model.number="physical_damage_yi"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5 offset-xs1>
                      <v-text-field
                        label="物理易傷#2(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        v-model.number="physical_damage_yi_c"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5>
                      <v-text-field
                        label="全傷害增傷#1(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        v-model.number="all_damage"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5 offset-xs1>
                      <v-text-field
                        label="全傷害增傷#2(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        v-model.number="all_damage_c"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5>
                      <v-text-field
                        label="全傷害易傷#1(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        v-model.number="all_damage_yi"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5 offset-xs1>
                      <v-text-field
                        label="全傷害易傷#2(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        v-model.number="all_damage_yi_c"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5>
                      <v-text-field
                        label="爆擊率#1(%)"
                        type="number"
                        suffix="%"
                        v-model.number="critical_rate"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5 offset-xs1>
                      <v-text-field
                        label="爆擊率#2(%)"
                        type="number"
                        suffix="%"
                        v-model.number="critical_rate_c"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5>
                      <v-text-field
                        label="爆擊增傷#1(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        hint="此為增加的爆擊傷害, 基礎爆擊傷害為200% (無增傷則填0)"
                        v-model.number="critical_damage"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 sm5 md5 offset-xs1>
                      <v-text-field
                        label="爆擊增傷#2(%)"
                        type="number"
                        mask="###"
                        suffix="%"
                        hint="此為增加的爆擊傷害, 基礎爆擊傷害為200% (無增傷則填0)"
                        v-model.number="critical_damage_c"
                      ></v-text-field>
                    </v-flex>
                    <!--傷害*爆擊率＋傷害*(1-爆擊率)=平均傷害期望值-->
                  </v-layout>
                  <v-layout>
                    <v-flex xs6>
                      <h2 style="text-align: left;">
                      傷害倍率：{{ physicalDamageMultiplier*100 }}%</h2>
                      <h2 style="text-align: left;">
                      平均傷害：{{ (attack*(multiplier/100)*physicalDamageMultiplier).toFixed(2) }}</h2>
                    </v-flex>
                    <v-flex xs6>
                      <h2 style="text-align: left;">
                      傷害倍率：{{ physicalDamageMultiplier_c*100 }}%</h2>
                      <h2 style="text-align: left;">
                      平均傷害：{{ (attack_c*(multiplier_c/100)*physicalDamageMultiplier_c).toFixed(2) }}</h2>
                    </v-flex>
                  </v-layout>                      
                </v-form>
                </v-card-text>
              </v-card>
                  </v-tab-item>
                  <!--元素傷害欄位-->
                  <v-tab-item
                    :id="'tab-2'"
                    key="tab-2"
                  >
                  <v-card flat>
                    <v-card-text>
                      <v-form>
                        <!--計算傷害倍率-->
                        <v-layout row wrap>
                          <v-flex xs5 sm5 md5>
                            <v-text-field
                              key="attack"
                              label="攻擊力#1"
                              type="number"
                              mask="####"
                              v-model.number="attack"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5 offset-xs1>
                            <v-text-field
                              key="attack"
                              label="攻擊力#2"
                              type="number"
                              mask="####"
                              v-model.number="attack_c"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5 >
                            <v-text-field
                              key="mult"
                              label="技能倍率#1(%)"
                              type="number"
                              mask="####"
                              suffix="%"
                              v-model.number="multiplier"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5 offset-xs1>
                            <v-text-field
                              key="mult"
                              label="技能倍率#2(%)"
                              type="number"
                              mask="####"
                              suffix="%"
                              v-model.number="multiplier_c"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5>
                            <v-text-field
                              label="元素增傷#1(%)"
                              type="number"
                              mask="###"
                              suffix="%"
                              v-model.number="element_damage"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5 offset-xs1>
                            <v-text-field
                              label="元素增傷#2(%)"
                              type="number"
                              mask="###"
                              suffix="%"
                              v-model.number="element_damage_c"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5>
                            <v-text-field
                              label="元素易傷#1(%)"
                              type="number"
                              mask="###"
                              suffix="%"
                              v-model.number="element_damage_yi"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5 offset-xs1>
                            <v-text-field
                              label="元素易傷#2(%)"
                              type="number"
                              mask="###"
                              suffix="%"
                              v-model.number="element_damage_yi_c"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5>
                            <v-text-field
                              label="全傷害增傷#1(%)"
                              type="number"
                              mask="###"
                              suffix="%"
                              v-model.number="all_damage"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5 offset-xs1>
                            <v-text-field
                              label="全傷害增傷#2(%)"
                              type="number"
                              mask="###"
                              suffix="%"
                              v-model.number="all_damage_c"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5>
                            <v-text-field
                              label="全傷害易傷#1(%)"
                              type="number"
                              mask="###"
                              suffix="%"
                              v-model.number="all_damage_yi"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs5 sm5 md5 offset-xs1>
                            <v-text-field
                              label="全傷害易傷#2(%)"
                              type="number"
                              mask="###"
                              suffix="%"
                              v-model.number="all_damage_yi_c"
                            ></v-text-field>
                          </v-flex>
                          <!--傷害*爆擊率＋傷害*(1-爆擊率)=平均傷害期望值-->
                        </v-layout>
                        <v-layout>
                          <v-flex xs6>
                            <h2 style="text-align: left;">
                            傷害倍率：{{ elementDamageMultiplier*100 }}%</h2>
                            <h2 style="text-align: left;">
                            平均傷害：{{ (attack*(multiplier/100)*elementDamageMultiplier).toFixed(2) }}</h2>
                          </v-flex>
                          <v-flex xs6>
                            <h2 style="text-align: left;">
                            傷害倍率：{{ elementDamageMultiplier_c*100 }}%</h2>
                            <h2 style="text-align: left;">
                            平均傷害：{{ (attack_c*(multiplier_c/100)*elementDamageMultiplier_c).toFixed(2) }}</h2>
                          </v-flex>
                        </v-layout>
                        
                        </v-form>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attack: 1000,
      multiplier: 100,        //技能倍率
      physical_damage: 0,
      physical_damage_yi: 0,
      element_damage: 0,
      element_damage_yi: 0,
      all_damage: 0,
      all_damage_yi: 0,
      critical_rate: 0,
      critical_damage: 0,
      //比較的變數以_c結尾  
      attack_c: 1000,
      multiplier_c: 100,        //技能倍率
      physical_damage_c: 0,
      physical_damage_yi_c: 0,
      element_damage_c: 0,
      element_damage_yi_c: 0,
      all_damage_c: 0,
      all_damage_yi_c: 0,
      critical_rate_c: 0,
      critical_damage_c: 0,
      tab: null,
      items: [
        '物理傷害','元素傷害'
      ],
      Compare: false,
    }
  },
  computed: {
    physicalDamageMultiplier: function () {
      return ((1+this.physical_damage/100)*(1+this.physical_damage_yi/100)*(1+this.all_damage/100)*(1+this.all_damage_yi/100)*(this.critical_rate/100)*(2+this.critical_damage/100)+(1+this.physical_damage/100)*(1+this.physical_damage_yi/100)*(1+this.all_damage/100)*(1+this.all_damage_yi/100)*(1-this.critical_rate/100)).toFixed(2)
    },
    elementDamageMultiplier: function () {
      return ((1+this.element_damage/100)*(1+this.element_damage_yi/100)*(1+this.all_damage/100)*(1+this.all_damage_yi/100)).toFixed(4)
    },
    physicalDamageMultiplier_c: function () {
      return ((1+this.physical_damage_c/100)*(1+this.physical_damage_yi_c/100)*(1+this.all_damage_c/100)*(1+this.all_damage_yi_c/100)*(this.critical_rate_c/100)*(2+this.critical_damage_c/100)+(1+this.physical_damage_c/100)*(1+this.physical_damage_yi_c/100)*(1+this.all_damage_c/100)*(1+this.all_damage_yi_c/100)*(1-this.critical_rate_c/100)).toFixed(2)
    },
    elementDamageMultiplier_c: function () {
      return ((1+this.element_damage_c/100)*(1+this.element_damage_yi_c/100)*(1+this.all_damage_c/100)*(1+this.all_damage_yi_c/100)).toFixed(4)
    }
  },
  methods: {
    Switch: function () {
      this.attack_c = this.attack
      this.multiplier_c = this.multiplier
      this.physical_damage_c = this.physical_damage
      this.physical_damage_yi_c = this.physical_damage_yi
      this.element_damage_c = this.element_damage
      this.element_damage_yi_c = this.element_damage_yi
      this.all_damage_c= this.all_damage
      this.all_damage_yi_c = this.all_damage_yi
      this.critical_rate_c = this.critical_rate
      this.critical_damage_c = this.critical_damage
      this.Compare = !this.Compare
      /* eslint-disable no-console */
      //console.log(this.Compare)
    }
  },
  components :{
    //countDamage
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
