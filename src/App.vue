<template>
  <div id="content">
        <Name />
        <Portrait />
        <Nav />
        <social-media />
    </div>
</template>

<script>
import Name from './components/Name.vue'
import Portrait from './components/Portrait.vue'
import Nav from './components/Nav.vue'
import SocialMedia from './components/SocialMedia.vue'
export default {
  name: 'App',
  components: {
    Name,
    Portrait,
    Nav,
    SocialMedia
  },
  mounted() {
    // $store.dispatch("getUserDetails");
    this.$store.dispatch('getUserDetails')
  },
}
</script>

<style>
        body {
            height: 100%;
            background: linear-gradient(90deg, #bd0f4d 50%, #cb2964 50%);
            background-repeat: no-repeat;
            font-family: 'Roboto', sans-serif;  
        }      
            #content {
              min-height: 100vh;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
        }
        .name p {
            font-size: 2.5rem;
            letter-spacing: 1rem;
            color: #fff;
            font-weight: 100;
            margin: 2em 0;
        }
        .full-portrait {
            width: 500px;
            max-width: 90%;
            height: 600px;
            margin: 10px auto;
            -webkit-box-shadow: -8px 0px 20px rgba(0,0,0,0.5);
            -moz-box-shadow: -8px 0px 20px rgba(0,0,0,0.5);
            box-shadow: -8px 0px 20px rgba(0,0,0,0.5);
            background-color: #cb2964;
        }
        .full-portrait img {
          width: 100%;
          height: 100%;
        }
        #header ul {
            width: 50%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: unset;
            margin: 30px auto 50px;
            position: relative;
        }
        
        #header li {
            list-style: none;
            text-transform: uppercase;
            font-size: 1rem;
            color: #fff;
            position: relative;
            transform: translate(50%, 0%);
        }
        #header li a {
            letter-spacing: 5px;
            text-decoration: unset;
            color: inherit;
        }
        li.pic {
            height: 70px;
            width: 70px;
            border-radius: 50%;
            background-color: #eee;
            border: 1px solid #fff;
        }
        .socials i {
            color: #fff;
            margin: 15px 0;
            font-size: 2.5rem;
        }
        @media screen and (max-width: 650px) {
            #header ul {
                width: 100%;
                flex-direction: column;
            }
            #header li {
                letter-spacing: unset;
                position: relative;
                transform: translate(0,0);
                margin: 10px 0;
            }
            li {
                order: 2;
            }
            li.pic {
                order: 1;
            }
        }
        @media screen and (max-width: 1020px) {
            #header ul {
                width: 80%
            }
            li {
                letter-spacing: unset;
            }
            .name p {
                font-size: 1.5rem;
                letter-spacing: 1rem;
            }
        }
        @media screen and (max-width: 700px) {
            .socials {
                display: flex;
                flex-direction: row;
                position: relative;
                justify-content: space-between;
                align-items: center;
                margin: 0 40px;
            }
        }
        @media screen and (min-width: 701px) {
            .socials {
                display: flex;
                flex-direction: column;
                position: fixed;
                right: 30px;
                top: 50%;
                transform: translate(-50%, -50%);
                justify-content: space-between;
                align-items: center;
                margin: 10px 0;
            }
        }
        @media screen and (max-width: 480px) {
            .name p {
                font-size: 1.5rem;
                letter-spacing: 0.5rem;
            }
            #header ul {
                flex-direction: column;
            }
            .socials {
                margin: 0 15px;
            }
            .socials i {
                font-size: 2rem;
            }
            .full-portrait {
                height: unset;
             }
        }
        @media screen and (max-width: 375px) {
             .full-portrait {
                height: unset;
             }
        }
        @media screen and (max-width: 350px) {
            .name p {
                font-size: 1.3rem;
                letter-spacing: 0.3rem;
            }
        }
</style>
