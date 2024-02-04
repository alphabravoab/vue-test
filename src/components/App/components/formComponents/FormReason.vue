<template>
  <div class="form-group">
    <h3>Reden van aanmelding</h3>
    <div class="form-input my-4">
      <label for="reason" id="aanmeldreden-label" class="input__title">
        Wat is de reden van uw aanvraag?
      </label>
      <div class="input__group">
        <select class="form-control" id="reason" :value=reason @input="$emit('update:reason', $event.target.value)">
          <option value="new">
            Nieuwe werkgever met collectiviteit bij
            Zilveren Kruis
          </option>
          <option selected value="change">
            Overstappen per 1-1-2023 naar Zilveren
            Kruis
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      reason: {
        type: String,
        default:""
      },
    },
    name: "FormReason"
  }
</script>
