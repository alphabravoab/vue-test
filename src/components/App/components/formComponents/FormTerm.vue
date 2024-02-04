<template>
  <div class="form-group">
    <div class="form-input my-4">
      <div class="input__group">
        <label class="input__title">
          Kies je betaaltermijn
        </label>
        <select class="form-control" @input="$emit('update:term', $event.target.value)">
          <option value="maand">per maand</option>
          <option  value="kwartaal">per kwartaal</option>
          <option selected value="jaar">per jaar</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    term: {
      type: String,
      default:""
    },
  },
  name: "FormTerm"
}
</script>
