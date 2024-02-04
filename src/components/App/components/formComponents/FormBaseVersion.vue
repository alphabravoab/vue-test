<template>
  <div class="form-group">
    <h3>Basisverzekering</h3>
    <p>
      In Nederland is de basisverzekering verplicht.
      Iedereen wordt voor de basisverzekering
      geaccepteerd. De overheid bepaalt welke zorg hierin
      zit en dit is dus bij elke verzekeraar hetzelfde.
    </p>
    <div class="input__group">
      <label class="input__title">
        Kies uw basisverzekering
      </label>
      <div class="form-row">
        <div class="radio__tile">
          <div
              class="radio custom-radio radio__option"
          >
            <input
                value="Basis Budget"
                type="radio"
                name="radio-insurance"
                id="radio-insurance-basis-budget"
                class="radio__input custom-control-input"
                @input="$emit('update:base', $event.target.value)"
            />
            <label
                for="radio-insurance-basis-budget"
                class="radio__label custom-control-label"
            >
              <p class="radio__description">
                Basis Budget
              </p>
              <p class="radio__price">
                € {{ priceBasic }} per {{ term }}
              </p>
            </label>
          </div>
        </div>
        <div class="radio__tile radio__tile--choice">
          <div class="badge radio__tile-badge">
            Meest gekozen
          </div>
          <div
              class="radio custom-radio radio__option"
          >
            <input
                value="Basis Zeker"
                type="radio"
                name="radio-insurance"
                id="radio-insurance-basis-zeker"
                class="radio__input custom-control-input"
                @input="$emit('update:base', $event.target.value)"
            />
            <label
                for="radio-insurance-basis-zeker"
                class="radio__label custom-control-label"
            >
              <p class="radio__description">
                Basis Zeker
              </p>
              <p class="radio__price">
                € {{ priceZeker }} per {{ term }}
              </p>
            </label>
          </div>
        </div>
        <div class="radio__tile">
          <div
              class="radio custom-radio radio__option"
          >
            <input
                value="Basis Exclusief (Restitutie)"
                type="radio"
                name="radio-insurance"
                id="radio-insurance-basis-exclusief-(restitutie)"
                class="radio__input custom-control-input"
                @input="$emit('update:base', $event.target.value)"
            />
            <label
                for="radio-insurance-basis-exclusief-(restitutie)"
                class="radio__label custom-control-label"
            >
              <p class="radio__description">
                Basis Exclusief (Restitutie)
              </p>
              <p class="radio__price">
                € {{ priceExclusive }} per {{ term }}
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {priceCheck, termCheck} from "@/components/App/components/priceCheck";

const formatter = new Intl.NumberFormat('nl');
  export default {
    props: {
      base: {
        type: String,
        default:""
      },
      term: {
        type: String,
        default: "jaar"
      },
    },
    name: "FormBaseVersion",
    computed: {
      priceBasic() {
        return formatter.format(priceCheck["Basis Budget"] / termCheck[this.term])
      },
      priceZeker() {
        return formatter.format(priceCheck["Basis Zeker"] / termCheck[this.term])
      },
      priceExclusive() {
        return formatter.format(priceCheck["Basis Exclusief (Restitutie)"] / termCheck[this.term])
      }
    }
  }
</script>
