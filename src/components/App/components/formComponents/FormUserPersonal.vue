<template>
  <div class="form-group">
    <h3>Persoonlijke gegevens</h3>
    <div class="form-input my-4">
      <div class="input__group">
        <label for="firstName" class="input__title">Naam</label>
        <input
            class="input__field form-control"
            type="text"
            id="firstName"
            :value="firstName"
            @input="$emit('update:firstName', $event.target.value)"
        />
      </div>
    </div>
    <div class="form-input my-4">
      <div class="input__group">
        <label for="infix" class="input__title">
          Tussenvoegsels
        </label>
        <input
            class="input__field form-control"
            type="text"
            id="infix"
            :value="infix"
            @input="$emit('update:infix', $event.target.value)"
        />
      </div>
    </div>
    <div class="form-input my-4">
      <div class="input__group">
        <label for="lastName" class="input__title">Achternaam</label>
        <input
            class="input__field form-control"
            type="text"
            id="lastName"
            :value="lastName"
            @input="$emit('update:lastName', $event.target.value)"
        />
      </div>
    </div>
    <div class="form-input my-4">
      <div class="input__group">
        <label for="gender" class="input__title">Geslacht</label>
        <div class="form-row">
          <div
              class="radio custom-radio radio__option"
          >
            <input
                id="man"
                class="radio__input custom-control-input"
                type="radio"
                name="geslacht"
                value="male"
                @input="$emit('update:gender', $event.target.value)"
            />
            <label
                class="radio__label custom-control-label"
                for="man"
            >
              Man
            </label>
          </div>
          <div
              class="radio custom-radio radio__option"
          >
            <input
                id="vrouw"
                class="radio__input custom-control-input"
                type="radio"
                name="geslacht"
                value="female"
                @input="$emit('update:gender', $event.target.value)"
            />
            <label
                class="radio__label custom-control-label"
                for="vrouw"
            >
              Vrouw
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="form-input my-4">
      <div class="input__group">
        <label class="input__title">
          Geboortedatum
        </label>
        <input
            class="input__field form-control"
            type="date"
            :value="birthDay"
            @input="$emit('update:birthDay', $event.target.value)"
        />
      </div>
    </div>
    <div class="form-input my-4">
      <div class="input__group">
        <label class="input__title">
          Burgerservicenummer
        </label>
        <input
            class="input__field form-control is-invalid"
            type="number"
            :value="bsn"
            @input="$emit('update:bsn', $event.target.value)"
        />
      </div>
      <div
          class="input__feedback invalid-feedback mt-1"
          aria-live="polite"
          v-if="bsn === ''"
      >
                                <span
                                >Helaas is het ingevoerde
                                    burgerservicenummer niet geldig. Probeer het
                                    opnieuw.</span
                                >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["firstName", "lastName", "infix", "gender", "birthDay", "bsn"],
    name: "FormUserPersonal"
  }
</script>
