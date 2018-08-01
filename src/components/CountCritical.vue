<template>
  <v-app>
    <div class="hello">
      <h1>崩壞三傷害倍率計算機</h1>
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary" flat>
                  <v-toolbar-title>爆擊率計算</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <!--計算爆擊率-->
                    <v-layout row wrap>
                      <v-flex xs6 sm6 md6>
                        <v-text-field
                          key="critical"
                          label="會心"
                          type="number"
                          mask="###"
                          v-model.number="critical"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs6 sm6 md6>
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
                    <h2 style="text-align: right;">爆擊率：{{ countCriticalRate }}%</h2>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <CountDamage/>
    </div>
  </v-app>
</template>

<script>
//import Vue from 'vue'
import CountDamage from './CountDamage.vue'

export default {
  data() {
    return {
      critical: 100,
      level: 80,
    }
  },
  computed: {
    countCriticalRate: function () {
      return (this.critical/(75+this.level*5)).toFixed(4)*100
    },
  },
  components: {
    CountDamage,
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
