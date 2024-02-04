<template>
  <form class="container my-3">
    <div class="row">
      <div class="col-8">
        <h1>Aanmelden</h1>

        <h2>Gegevens</h2>
        <FormReason v-model:reason="formValues.reason" />
        <FormUserPersonal
            v-model:firstName="formValues.firstName"
            v-model:lastName="formValues.lastName"
            v-model:infix="formValues.infix"
            v-model:gender="formValues.gender"
            v-model:birthDay="formValues.birthDay"
            v-model:bsn="formValues.bsn"
        />

        <h2 class="mt-5">Verzekering</h2>
        <FormBaseVersion
            v-model:base="formValues.baseInsurance"
            v-model:term="formValues.term"
        />
        <FormTerm
            v-model:term="formValues.term"
        />
        <FormNoClaim
            v-model:noClaim="formValues.noClaim"
            v-model:base="formValues.baseInsurance"
        />
        <FormAdditional
            v-model:additional="formValues.additional"
        />
        <FormTooth
            v-model:tooth="formValues.tooth"
        />
        <div v-if="formValues.baseInsurance !== ''">
          <ControlePolis
              v-model:firstName="formValues.firstName"
              v-model:infix="formValues.infix"
              v-model:lastName="formValues.lastName"
              v-model:birthDay="formValues.birthDay"
              v-model:baseInsurance="formValues.baseInsurance"
              v-model:noClaim="formValues.noClaim"
              v-model:term="formValues.term"
              v-model:additional="formValues.additional"
          />
        </div>
      </div>
      <div class="col-4">
        <div class="card card--filled-secondary h-auto">
          <div class="card-body">
            <div class="sf-contactblok-content">
              <h3 class="mb-2">We staan voor je klaar</h3>
              <button @click="submit">Test</button>
              <p class="mb-5">
                Twijfel je? Heb je een vraag?
              </p>
              <div class="phonenumber mb-2">
                <a href="tel:0900 040 03 09">
                                        <span class="sr-only">
                                            Telefoonnummer
                                        </span>
                  0900 040 03 09
                </a>
                <div class="popover__container ml-1">
                  <button
                      id="info-phone"
                      type="button"
                      class="btn popover__btn btn--popover btn-none"
                  >
                                            <span class="sr-only">
                                                Informatie weergeven
                                            </span>
                  </button>
                </div>
              </div>
              <small>
                Open op maandag t/m vrijdag van 08:00 tot
                17:00
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import FormReason from "@/components/App/components/formComponents/FormReason.vue";
import FormUserPersonal from "@/components/App/components/formComponents/FormUserPersonal.vue";
import FormBaseVersion from "@/components/App/components/formComponents/FormBaseVersion.vue";
import FormTerm from "@/components/App/components/formComponents/FormTerm.vue";
import FormNoClaim from "@/components/App/components/formComponents/FormNoClaim.vue";
import FormAdditional from "@/components/App/components/formComponents/FormAdditonal.vue";
import FormTooth from "@/components/App/components/formComponents/FormTooth.vue";
import ControlePolis from "@/components/App/components/ControlePolis.vue";
export default {
  name: "FormBase",
  data() {
    return {
      formValues: {
        reason: "new",
        firstName: "",
        infix: "",
        lastName: "",
        gender: "",
        birthDay: "",
        bsn: "",
        baseInsurance: "",
        term: "jaar",
        noClaim: 385,
        additional: "",
        tooth: "",
      }
    }
  },
  components: {
    FormTooth,
    FormAdditional,
    FormNoClaim,
    FormTerm,
    FormBaseVersion,
    FormUserPersonal,
    FormReason,
    ControlePolis
  },
  methods: {
    submit(e) {
      e.preventDefault();
      console.log("testing this", this.formValues)
      this.$emit('submit', this.formValues)
    }
  }
}
</script>
