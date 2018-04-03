<template>
  <modal-screen class="intro">
    <div>
      <img :src="require('@/assets/intro.svg')" />
      <p>
        æternity gives you easy access to the magic of blockchain
        technology. Instantly login or see how it works.
      </p>
    </div>

    <div slot="footer">
      <ae-button
        type="dramatic"
        @click="scanQR"
      >
        Scan QR
      </ae-button>
      <ae-button :to="{ name: keystore ? 'login' : 'new-account' }" type="exciting">
        {{keystore ? 'Login' : 'Create Account'}}
      </ae-button>
      <ae-button :to="{ name: 'onboarding' }" size="small" plain uppercase>
        See how it works
      </ae-button>
    </div>
  </modal-screen>
</template>

<script>
  import { mapState } from 'vuex'
  import { AeButton } from '@aeternity/aepp-components'
  import ModalScreen from '@/components/ModalScreen'

  export default {
    components: { ModalScreen, AeButton },
    computed: mapState({
      keystore: state => state.keystore
    }),
    methods: {
      async scanQR () {
        console.log('Start QR Scan')

        // TODO: Wait for device ready
        window.cordova.plugins.barcodeScanner.scan(
          function (result) {
            alert(
              'We got a barcode\n' +
                'Result: ' +
                result.text +
                '\n' +
                'Format: ' +
                result.format +
                '\n' +
                'Cancelled: ' +
                result.cancelled
            )
          },
          function (error) {
            alert('Scanning failed: ' + error)
          },
          {
            preferFrontCamera: false, // iOS and Android
            showFlipCameraButton: false, // iOS and Android
            showTorchButton: true, // iOS and Android
            torchOn: false, // Android, launch with the torch switched on (if available)
            saveHistory: false, // Android, save scan history (default false)
            prompt: 'Scan QR', // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats: 'QR_CODE', // default: all but PDF_417 and RSS_EXPANDED
            orientation: 'portrait', // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations: false, // iOS
            disableSuccessBeep: false // iOS and Android
          }
        )
      }
    }
  }
</script>

<style lang="scss">
  @import '~@aeternity/aepp-components/dist/variables.scss';

  .intro.modal-screen.ae-overlay {
    background: transparent;

    .ae-modal {
      background: transparent;

      .ae-header, header.desktop {
        display: none;
      }

      main.content {
        flex-shrink: 0;
        display: flex;

        div {
          text-align: center;
          margin: auto;

          img, p {
            margin: 12px;
          }

          p {
            max-width: 300px;
            font-size: 18px;
            line-height: 1.56;
            color: $anthracite;
          }
        }
      }
    }
  }
</style>
