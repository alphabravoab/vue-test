<template>
  <div class="form-group">
    <h3>Eigen risico</h3>
    <div class="form-input my-4">
      <div class="input__group">
        <label class="input__title">
          Kies de hoogste van het eigen risico
        </label>
        <select class="form-control" @input="$emit('update:noClaim', $event.target.value)" :disabled="base === ''">
          <option value="385">
            € 385 - verplicht eigen risico
          </option>
          <option value="885">
            € 885 - korting van € 22 per jaar
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noClaim: {
      type: Number,
      default: null
    },
    base: {
      type: String,
      default:""
    },
  },
  name: "ForNoClaim"
}
</script>
