<template>
  <div class="form-group">
    <h3>Aanvullende verzekering</h3>
    <p>
      Onze aanvullende verzekeringen kennen ruim 100
      verschillende vergoedingen. De hoogte van de
      vergoeding verschilt per pakket.hoogte van de
      vergoeding verschilt per pakket
    </p>
    <div class="form-input my-4">
      <div class="input__group">
        <label class="input__title">
          Kies uw aanvullende verzekering
        </label>
        <select class="form-control" @input="$emit('update:additional', $event.target.value)">
          <option selected value="none">
            Geen aanvullende verzekering
            geselecteerd
          </option>
          <option value="additional1">
            Aanvullend 1 - € 21,38 per jaar
          </option>
          <option value="additional2">
            Aanvullend 2 - € 85,06 per jaar
          </option>
          <option value="additional3">
            Aanvullend 3 - € 198,63 per jaar
          </option>
          <option value="additional4">
            Aanvullend 4 - € 359,73 per jaar
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    additional: {
      type: String,
      default:""
    },
  },
  name: "FormAdditional"
}
</script>
