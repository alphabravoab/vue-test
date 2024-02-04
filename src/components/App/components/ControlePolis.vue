<template>
  <h2 class="mt-5">Controleren</h2>
  <div class="form-group">
    <h3>Gekozen pakket</h3>
    <h4>{{ firstName }} {{ infix }} {{ lastName }} <span v-if="birthDay">( {{ birthDay }})</span> </h4>
    <div v-if="baseInsurance !== ''">
      <span>{{ baseInsurance }} {{ priceBasic }}</span>

       <h6>Eigen risico</h6>
      &euro;{{ cleanedNoClaim }}
      <h6>Aanvullende verzekering</h6>
      Aanvullend  {{ additionalCleaned }}
    </div>
  </div>
  <div class="form-group">
    <div class="card card--filled-secondary h-auto">
      <div class="card-body">
        <h3>Totaalpremie per {{ term }}</h3>
        &euro;{{ pricePerTime }}
      </div>
    </div>
  </div>
  <div class="form-group">
    <h3>Adres en contactgegevens</h3>
    <div>{{ firstName }} {{ infix }} {{ lastName }}</div>
  </div>
</template>

<script>
import {additionalCheck, priceCheck, termCheck} from "@/components/App/components/priceCheck";

const formatter = new Intl.NumberFormat('nl');
const checkPrice = (base, term, additional) => {
  if (base === "") {
    return ""
  }
  return formatter.format((priceCheck[base] + additionalCheck(additional)) / termCheck[term])
}
 export default {
  name: "ControlePolis",
  props: ["firstName", "lastName", "infix", "noClaim", "birthDay", "baseInsurance", "term", "additional"],
  computed: {
   pricePerTime() {
     return checkPrice(this.baseInsurance, this.term, this.additional)
   },
   cleanedNoClaim() {
     return formatter.format(this.noClaim)
   },
    additionalCleaned() {
     return formatter.format(additionalCheck(this.additional))
    },
    priceBasic() {
     return checkPrice(this.baseInsurance, this.term, "")
    }
 }
 }
</script>
