<template>
  <div class="form-group">
    <div class="form-input my-4">
      <div class="input__group">
        <label class="input__title">
          Kies uw tandartsverzekering
        </label>
        <select class="form-control" @input="$emit('update:tooth', $event.target.value)">
          <option selected value="none">
            Geen tandartsverzekering geselecteerd
          </option>
          <option value="tooth1">Tand 1 - € 80,28 per jaar</option>
          <option value="tooth2">Tand 2 - € 221,65 per jaar</option>
          <option value="tooth3">Tand 3 - € 449,36 per jaar</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tooth: {
      type: String,
      default:""
    },
  },
  name: "FormTooth"
}
</script>
