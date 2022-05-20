import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projectsAnimation } from '../../animation';

// create a splash screen component

const Splash = () => {
  return (
    <Div id="splash">
      <motion.div
        variants={projectsAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
      >
        <svg
          id="svg-logo"
          width="87"
          height="96"
          viewBox="0 0 87 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="path-1"
            d="M34.8022 73.752L35.3109 72.8911L35.3048 72.8875L34.8022 73.752ZM29.5222 70.008L28.8975 70.7889L28.9018 70.7923L29.5222 70.008ZM25.3942 66.888L25.9646 66.0666L25.9597 66.0633L25.3942 66.888ZM21.6982 64.92L21.3152 65.8438L21.323 65.8469L21.6982 64.92ZM16.5622 64.152L15.5845 63.9418L15.2884 65.319L16.6862 65.1443L16.5622 64.152ZM23.7142 30.888L24.6918 31.0982L25.0879 29.2563L23.3404 29.9605L23.7142 30.888ZM18.7222 34.872L17.8878 34.3207L17.8855 34.3243L18.7222 34.872ZM17.3302 43.848L16.424 44.2709L16.4297 44.2831L16.4358 44.2952L17.3302 43.848ZM17.6662 44.616V45.616H18.6662V44.616H17.6662ZM13.7782 43.56L13.1156 44.309L13.1308 44.3224L13.1465 44.3352L13.7782 43.56ZM15.0262 34.008L14.2713 33.3521L14.2705 33.3531L15.0262 34.008ZM21.5062 29.304L21.9175 30.2156L21.9266 30.2113L21.5062 29.304ZM31.2982 27.576L32.276 27.7857L32.516 26.6667L31.3749 26.5789L31.2982 27.576ZM23.9062 62.04L22.9284 61.8303L22.7257 62.7756L23.6637 63.0101L23.9062 62.04ZM26.6422 63L27.0651 62.0938L27.0582 62.0906L27.0512 62.0875L26.6422 63ZM30.0982 64.776L29.6179 65.6531L29.6241 65.6565L30.0982 64.776ZM35.4262 67.32L35.8079 66.3957L35.7993 66.3922L35.7906 66.3888L35.4262 67.32ZM44.0662 67.464L45.0602 67.5729L45.2436 65.9001L43.6866 66.5388L44.0662 67.464ZM42.3382 72.984L41.5061 72.4293L41.5015 72.4362L41.497 72.4432L42.3382 72.984ZM39.0742 74C37.8364 74 36.5862 73.6446 35.3109 72.8911L34.2935 74.6129C35.8342 75.5234 37.432 76 39.0742 76V74ZM35.3048 72.8875C33.9888 72.1224 32.2717 70.9079 30.1426 69.2237L28.9018 70.7923C31.0607 72.5001 32.8635 73.7816 34.2996 74.6165L35.3048 72.8875ZM30.1469 69.2271C28.5365 67.9388 27.1414 66.8839 25.9646 66.0666L24.8238 67.7094C25.9509 68.4921 27.3079 69.5172 28.8975 70.7889L30.1469 69.2271ZM25.9597 66.0633C24.7763 65.2518 23.4798 64.5623 22.0734 63.9931L21.323 65.8469C22.6045 66.3657 23.7721 66.9882 24.8287 67.7127L25.9597 66.0633ZM22.0812 63.9963C20.6518 63.4036 19.1779 63.104 17.6662 63.104V65.104C18.9065 65.104 20.1206 65.3484 21.3152 65.8437L22.0812 63.9963ZM17.6662 63.104C17.1735 63.104 16.7564 63.1199 16.4382 63.1597L16.6862 65.1443C16.88 65.1201 17.1989 65.104 17.6662 65.104V63.104ZM17.5398 64.3622L24.6918 31.0982L22.7365 30.6778L15.5845 63.9418L17.5398 64.3622ZM23.3404 29.9605C21.0234 30.8942 19.1923 32.3464 17.8879 34.3207L19.5565 35.4233C20.6201 33.8136 22.117 32.6098 24.088 31.8155L23.3404 29.9605ZM17.8855 34.3243C16.6058 36.2794 15.9942 38.64 15.9942 41.352H17.9942C17.9942 38.944 18.5346 36.9846 19.5589 35.4197L17.8855 34.3243ZM15.9942 41.352C15.9942 42.5449 16.0988 43.5739 16.424 44.2709L18.2364 43.4251C18.1136 43.1621 17.9942 42.5271 17.9942 41.352H15.9942ZM16.4358 44.2952C16.5451 44.5138 16.6202 44.6721 16.666 44.7768C16.6895 44.8304 16.6993 44.8564 16.7013 44.8623C16.7024 44.8655 16.6973 44.8514 16.6908 44.8255C16.6874 44.8121 16.6821 44.789 16.6773 44.7589C16.6729 44.7309 16.6662 44.6805 16.6662 44.616H18.6662C18.6662 44.4073 18.5983 44.228 18.589 44.2016C18.5631 44.1276 18.5309 44.0496 18.4983 43.9752C18.4322 43.8239 18.3393 43.6302 18.2246 43.4008L16.4358 44.2952ZM17.6662 43.616C16.0483 43.616 15.0205 43.2823 14.4099 42.7848L13.1465 44.3352C14.2639 45.2457 15.8281 45.616 17.6662 45.616V43.616ZM14.4408 42.811C13.9116 42.3429 13.5302 41.4814 13.5302 39.96H11.5302C11.5302 41.7666 11.9808 43.3051 13.1156 44.309L14.4408 42.811ZM13.5302 39.96C13.5302 38.2065 14.2361 36.4465 15.7819 34.6629L14.2705 33.3531C12.4882 35.4095 11.5302 37.6175 11.5302 39.96H13.5302ZM15.7811 34.6639C17.3721 32.8327 19.4101 31.3469 21.9175 30.2155L21.0949 28.3925C18.3543 29.6291 16.0723 31.2793 14.2713 33.3521L15.7811 34.6639ZM21.9266 30.2113C24.4325 29.0501 26.9137 28.48 29.3782 28.48V26.48C26.5947 26.48 23.8279 27.1259 21.0857 28.3967L21.9266 30.2113ZM29.3782 28.48C29.7875 28.48 30.3973 28.5097 31.2215 28.5731L31.3749 26.5789C30.5351 26.5143 29.8649 26.48 29.3782 26.48V28.48ZM30.3204 27.3663L22.9284 61.8303L24.884 62.2497L32.276 27.7857L30.3204 27.3663ZM23.6637 63.0101C24.4972 63.2185 25.3535 63.5182 26.2331 63.9125L27.0512 62.0875C26.0749 61.6498 25.1072 61.3095 24.1487 61.0699L23.6637 63.0101ZM26.2193 63.9062C27.1534 64.3421 28.2852 64.9233 29.6179 65.6531L30.5785 63.8989C29.2232 63.1567 28.051 62.5539 27.0651 62.0938L26.2193 63.9062ZM29.6241 65.6565C31.7241 66.7872 33.5388 67.6553 35.0618 68.2512L35.7906 66.3888C34.3696 65.8327 32.6323 65.0048 30.5723 63.8955L29.6241 65.6565ZM35.0444 68.2443C36.6381 68.9025 38.3038 69.232 40.0342 69.232V67.232C38.5646 67.232 37.1583 66.9535 35.8079 66.3957L35.0444 68.2443ZM40.0342 69.232C41.5955 69.232 43.0693 68.9538 44.4457 68.3892L43.6866 66.5388C42.567 66.9982 41.3529 67.232 40.0342 67.232V69.232ZM43.0721 67.3551C42.8262 69.599 42.282 71.2656 41.5061 72.4293L43.1702 73.5387C44.1864 72.0144 44.7941 70.001 45.0602 67.5729L43.0721 67.3551ZM41.497 72.4432C40.7709 73.5728 39.9686 74 39.0742 74V76C40.8038 76 42.1775 75.0832 43.1794 73.5248L41.497 72.4432ZM48.2759 60.984L47.5614 61.6837L47.5688 61.6911L48.2759 60.984ZM47.5559 44.04L48.5168 44.317L47.5559 44.04ZM52.0199 34.92L51.2332 34.3026L51.2284 34.3088L52.0199 34.92ZM61.5239 31.512L62.0327 32.3729L63.8555 31.2958L61.8657 30.5722L61.5239 31.512ZM57.4439 36.648L56.5517 36.1964L56.5473 36.2052L57.4439 36.648ZM54.3239 45.336L53.3538 45.0935L53.3538 45.0935L54.3239 45.336ZM60.5639 56.04L59.7409 55.472L59.7392 55.4745L60.5639 56.04ZM64.4039 47.496L63.4458 47.2095L63.4434 47.2177L64.4039 47.496ZM65.4119 32.856L64.4449 33.1105L64.4489 33.1258L64.4534 33.141L65.4119 32.856ZM63.5879 30.12L64.1494 29.2925L64.1494 29.2925L63.5879 30.12ZM52.9319 30.744L53.3571 31.6492L53.3682 31.6438L52.9319 30.744ZM47.8439 35.064L47.0162 34.5028L47.0141 34.506L47.8439 35.064ZM46.2119 43.464L45.2786 43.823L45.2835 43.8359L45.2889 43.8486L46.2119 43.464ZM46.4519 44.136V45.136H47.4519V44.136H46.4519ZM42.8039 43.176L42.1792 43.9569L42.1867 43.9628L42.1942 43.9686L42.8039 43.176ZM44.2919 33.768L43.5504 33.0971L43.5445 33.1036L44.2919 33.768ZM51.4919 28.872L51.1087 27.9483L51.1052 27.9498L51.4919 28.872ZM70.4039 49.992L71.3493 50.318L71.3493 50.318L70.4039 49.992ZM64.4519 59.448L65.1459 60.168L65.1461 60.1678L64.4519 59.448ZM54.6119 62.288C52.1224 62.288 50.2891 61.5829 48.983 60.2769L47.5688 61.6911C49.3348 63.4571 51.7255 64.288 54.6119 64.288V62.288ZM48.9904 60.2844C47.7495 59.0171 47.0199 56.8811 47.0199 53.64H45.0199C45.0199 57.1189 45.7943 59.8789 47.5614 61.6836L48.9904 60.2844ZM47.0199 53.64C47.0199 50.9088 47.5115 47.8042 48.5168 44.317L46.5951 43.763C45.5524 47.3798 45.0199 50.6752 45.0199 53.64H47.0199ZM48.5168 44.317C49.5113 40.8673 50.9476 37.945 52.8114 35.5312L51.2284 34.3088C49.1883 36.951 47.6485 40.1087 46.5951 43.763L48.5168 44.317ZM52.8066 35.5374C54.6424 33.1982 56.7083 32.128 59.0279 32.128V30.128C55.9716 30.128 53.3655 31.5858 51.2333 34.3026L52.8066 35.5374ZM59.0279 32.128C59.9026 32.128 60.6137 32.2451 61.1822 32.4518L61.8657 30.5722C61.0262 30.2669 60.0732 30.128 59.0279 30.128V32.128ZM61.0152 30.6511C59.3592 31.6296 57.8917 33.5492 56.5517 36.1964L58.3362 37.0996C59.6202 34.5628 60.8727 33.0584 62.0327 32.3729L61.0152 30.6511ZM56.5473 36.2052C55.2317 38.8694 54.1687 41.8338 53.3538 45.0935L55.2941 45.5785C56.0792 42.4382 57.0962 39.6106 58.3406 37.0908L56.5473 36.2052ZM53.3538 45.0935C52.5402 48.3479 52.1239 51.264 52.1239 53.832H54.1239C54.1239 51.472 54.5077 48.7241 55.2941 45.5785L53.3538 45.0935ZM52.1239 53.832C52.1239 55.6278 52.3538 57.1484 52.8846 58.3236L54.7073 57.5004C54.342 56.6916 54.1239 55.4922 54.1239 53.832H52.1239ZM52.8846 58.3236C53.163 58.94 53.5521 59.4707 54.084 59.8455C54.6237 60.2257 55.2464 60.4 55.9079 60.4V58.4C55.6094 58.4 55.4002 58.3263 55.2359 58.2105C55.0638 58.0893 54.8769 57.876 54.7073 57.5004L52.8846 58.3236ZM55.9079 60.4C57.9882 60.4 59.8012 58.9206 61.3887 56.6055L59.7392 55.4745C58.2547 57.6394 56.9636 58.4 55.9079 58.4V60.4ZM61.387 56.608C63.0309 54.226 64.3508 51.2731 65.3644 47.7743L63.4434 47.2177C62.4731 50.5669 61.233 53.31 59.7409 55.472L61.387 56.608ZM65.362 47.7825C66.4103 44.2773 66.9399 40.8845 66.9399 37.608H64.9399C64.9399 40.6674 64.4456 43.8667 63.4459 47.2095L65.362 47.7825ZM66.9399 37.608C66.9399 35.5784 66.7614 33.8861 66.3705 32.571L64.4534 33.141C64.7664 34.1939 64.9399 35.6696 64.9399 37.608H66.9399ZM66.379 32.6015C66.008 31.1917 65.2771 30.0577 64.1494 29.2925L63.0264 30.9475C63.6907 31.3982 64.1759 32.0883 64.4449 33.1105L66.379 32.6015ZM64.1494 29.2925C63.0234 28.5284 61.5329 28.208 59.7959 28.208V30.208C61.323 30.208 62.3605 30.4956 63.0264 30.9475L64.1494 29.2925ZM59.7959 28.208C57.1885 28.208 54.7504 28.751 52.4957 29.8442L53.3682 31.6438C55.3374 30.689 57.4753 30.208 59.7959 30.208V28.208ZM52.5068 29.8389C50.2361 30.9054 48.3995 32.4625 47.0162 34.5028L48.6716 35.6252C49.8484 33.8894 51.4038 32.5666 53.3571 31.6491L52.5068 29.8389ZM47.0141 34.506C45.644 36.5436 44.9719 38.9023 44.9719 41.544H46.9719C46.9719 39.2577 47.5479 37.2964 48.6738 35.622L47.0141 34.506ZM44.9719 41.544C44.9719 42.4376 45.0503 43.2294 45.2786 43.823L47.1453 43.105C47.0536 42.8665 46.9719 42.3784 46.9719 41.544H44.9719ZM45.2889 43.8486C45.3663 44.0346 45.4187 44.1682 45.4502 44.2563C45.4578 44.2775 45.4634 44.2941 45.4675 44.3065C45.4695 44.3127 45.4709 44.3174 45.472 44.3208C45.473 44.3242 45.4734 44.3257 45.4734 44.3256C45.4734 44.3256 45.4727 44.3231 45.4715 44.3183C45.4704 44.3137 45.4684 44.3051 45.4662 44.2933C45.4634 44.2788 45.4519 44.219 45.4519 44.136H47.4519C47.4519 43.9709 47.4111 43.8287 47.4005 43.7904C47.3814 43.7218 47.3576 43.6508 47.3337 43.5837C47.2851 43.4478 47.2175 43.2774 47.135 43.0794L45.2889 43.8486ZM46.4519 43.136C44.9629 43.136 44.0003 42.8347 43.4136 42.3834L42.1942 43.9686C43.2715 44.7973 44.7409 45.136 46.4519 45.136V43.136ZM43.4286 42.3951C42.9463 42.0092 42.6039 41.3288 42.6039 40.104H40.6039C40.6039 41.6952 41.0616 43.0628 42.1792 43.9569L43.4286 42.3951ZM42.6039 40.104C42.6039 38.1923 43.3724 36.3077 45.0393 34.4324L43.5445 33.1036C41.6275 35.2603 40.6039 37.5997 40.6039 40.104H42.6039ZM45.0335 34.4389C46.7424 32.5501 49.0129 30.996 51.8787 29.7942L51.1052 27.9498C48.019 29.244 45.4895 30.9539 43.5504 33.0971L45.0335 34.4389ZM51.8752 29.7957C54.7602 28.5987 57.7818 28 60.9479 28V26C57.5221 26 54.2397 26.6493 51.1087 27.9483L51.8752 29.7957ZM60.9479 28C64.7796 28 67.3317 29.0391 68.864 30.8997L70.4079 29.6283C68.3562 27.1369 65.1163 26 60.9479 26V28ZM68.864 30.8997C70.4629 32.8412 71.3239 35.5962 71.3239 39.288H73.3239C73.3239 35.2998 72.393 32.0388 70.4079 29.6283L68.864 30.8997ZM71.3239 39.288C71.3239 42.5861 70.7076 46.0437 69.4586 49.666L71.3493 50.318C72.6603 46.5162 73.3239 42.8379 73.3239 39.288H71.3239ZM69.4586 49.666C68.2273 53.2366 66.3263 56.2514 63.7578 58.7282L65.1461 60.1678C67.9536 57.4606 70.0206 54.1714 71.3493 50.318L69.4586 49.666ZM63.758 58.728C61.3 61.0971 58.2738 62.288 54.6119 62.288V64.288C58.7581 64.288 62.2919 62.9189 65.1459 60.168L63.758 58.728Z"
            fill="#64FFDA"
          />
          <path
            id="path-2"
            d="M3.11108 25.4633L43.3458 2.86727L83.5805 25.4633V70.5367L43.3458 93.1327L3.11108 70.5367V25.4633Z"
            stroke="#64FFDA"
            strokeWidth="5"
          />
        </svg>
      </motion.div>
    </Div>
  );
};

const Div = styled.div`
  //   make the splash cover the whole viewport
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--navy);

  svg {
    path {
      stroke-dasharray: 274.72900390625;
      stroke-dashoffset: 274.72900390625;
      animation: logo-animation 0.8s ease-in-out forwards 2s;
    }
  }

  @keyframes logo-animation {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export default Splash;
