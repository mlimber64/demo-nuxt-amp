<template>
    <div class="toolbar" :class="{dark: isHome}">
        <div class="items">
            <div class="t-btn t-btn-desktop" role="button" tabindex="1" on="tap:AMP.navigateTo(url='/')">
                HOME
            </div>
            <div class="t-btn t-btn-desktop" role="button" tabindex="2" on="tap:AMP.navigateTo(url='/series')">
                LISTA
            </div>
            <div class="t-btn t-btn-mobile" role="button" tabindex="1" on="tap:AMP.navigateTo(url='/')">
                <fa-icon class="icon" :icon="['fas','home']"/>
            </div>
            <div class="t-btn t-btn-mobile" role="button" tabindex="1" on="tap:AMP.navigateTo(url='/series')">
                <fa-icon class="icon" :icon="['fas', 'th-large']" />
            </div>
        </div>
    </div>
</template>

<script>

import {library} from '@fortawesome/fontawesome-svg-core'
import {faHome, faThLarge} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon, fontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faHome,faThLarge)

export default {

    name: 'Toolbar',
    components: 
    {
        faIcon: FontAwesomeIcon
    },
    computed:
    {
        isHome()
        {
            return this.$route.fullPath === '/'
        }
    }    
}
</script>

<style lang="scss">
    .toolbar
    {
        width: 100vw;
        height: 56px;
        background: transparent;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: absolute;
        top: 0;
        z-index: 2;

        .title
        {
            padding: 13px 10px;
            font-size: 30px;
        }
        .items
        {
            height: 100;
            display: flex;
            align-items: center;
            .t-btn {
      margin-left: 5px;
      height: 100%;
      min-width: 80px;
      text-align: center;
      font-size: 16px;
      padding: 20px 0;
      outline: none;
      &-mobile {
        min-width: 40px;
        display: none;
      }
      &:hover {
        border-bottom: 1px solid darkgrey;
      }
      &:active {
        border-bottom: 3px solid rgb(247, 199, 199);
        font-size: 14px;
        padding: 21px 0;
        .icon {
          height: 14px;
        }
      }
      .icon {
        height: 16px;
      }
    }
    .btn-small {
      min-width: 50px;
    }
  }
}
.dark {
  color: #f0f3f3;
}
@media screen and (max-width: 430px) {
  .toolbar .items .t-btn {
    &-desktop {
      display: none;
    }
    &-mobile {
      display: block;
    }
  }

}
    
</style>