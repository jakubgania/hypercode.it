import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

class Home extends React.Component {
  state = {
    totalNumberOfResources: 0,
    content: [
      {
        sectionName: 'GENERAL',
        subsections: [
          {
            name: 'Programming',
            links: [
              {
                name: 'https://hackernoon.com/',
                url: 'hackernoon.com'
              },
              {
                name: 'https://www.w3schools.com/',
                url: 'w3schools.com'
              },
              {
                name: 'https://4programmers.net/',
                url: '4programmers.net'
              },
              {
                name: 'https://stackoverflow.com/',
                url: 'stackoverflow.com'
              },
              {
                name: 'https://developer.mozilla.org/',
                url: 'developer.mozilla.org'
              }
            ]
          },
          {
            name: 'Cloud',
            links: [
              {
                name: 'https://aws.amazon.com/',
                url: ''
              },
              {
                name: 'https://cloud.google.com/',
                url: ''
              },
              {
                name: 'https://azure.microsoft.com/',
                url: ''
              },
              {
                name: 'https://www.ibm.com/cloud',
                url: ''
              },
              {
                name: 'https://us.alibabacloud.com/',
                url: ''
              },
              {
                name: 'https://cloud.vmware.com/',
                url: ''
              },
              {
                name: 'https://www.oracle.com/cloud/',
                url: ''
              },
              {
                name: 'https://www.digitalocean.com/',
                url: ''
              }
            ]
          },
          {
            name: 'IT / Technologies',
            links: [
              {
                name: 'https://www.purepc.pl/',
                url: 'purepc.pl'
              },
              {
                name: 'https://www.benchmark.pl/',
                url: 'benchmark.pl'
              },
              {
                name: 'https://www.dobreprogramy.pl/',
                url: 'dobreprogramy.pl'
              },
              {
                name: 'https://pclab.pl/',
                url: 'pclab.pl'
              }
            ]
          },
          {
            name: 'Community',
            links: [
              {
                name: 'dev.to',
                url: 'https://dev.to/'
              },
              {
                name: 'Dzone',
                url: 'https://dzone.com/'
              },
              {
                name: 'Stack Exchange',
                url: 'https://stackexchange.com/'
              },
              {
                name: 'GitHub',
                url: 'https://github.com/'
              },
              {
                name: 'Sitepoint',
                url: 'https://sitepoint.com/'
              },
              {
                name: 'Reddit Programming',
                url: 'https://www.reddit.com/r/programming/'
              },
              {
                name: 'Slashdot',
                url: 'https://slashdot.org/'
              },
              {
                name: 'Bitbucket',
                url: 'https://bitbucket.org/'
              }
            ]
          },
          {
            name: 'Job / Recruitment',
            links: [
              {
                name: 'justjoin.it',
                url: 'https://justjoin.it/'
              },
              {
                name: 'nofluffjobs.com',
                url: 'https://nofluffjobs.com/pl'
              },
              {
                name: 'bulldogjob.com',
                url: 'https://bulldogjob.com/'
              },
              {
                name: 'juniorjobsonly.com',
                url: 'https://www.juniorjobsonly.com/'
              },
              {
                name: 'it.pracuj.pl',
                url: 'https://it.pracuj.pl/'
              }
            ]
          }
        ]
      },
      {
        sectionName: 'PROGRAMMING',
        subsections: [
          {
            name: 'Vue',
            links: [
              {
                name: 'vuejs.org',
                url: 'https://vuejs.org/'
              },
              {
                name: 'vuetifyjs.com',
                url: 'https://vuetifyjs.com/en/'
              },
              {
                name: 'nuxtjs.org',
                url: 'https://nuxtjs.org/'
              },
              {
                name: 'vue-material-kit',
                url: 'https://www.creative-tim.com/product/vue-material-kit'
              },
              {
                name: 'buefy',
                url: 'https://buefy.org/'
              },
              {
                name: 'fish-ui',
                url: 'https://github.com/myliang/fish-ui'
              },
              {
                name: 'quasar.dev',
                url: 'https://quasar.dev/'
              },
              {
                name: 'vux',
                url: 'https://github.com/airyland/vux'
              },
              {
                name: 'element',
                url: 'https://github.com/ElemeFE/element'
              },
              {
                name: 'keen-ui',
                url: 'https://josephuspaye.github.io/Keen-UI/#/ui-alert'
              },
              {
                name: 'at-ui',
                url: 'https://github.com/at-ui/at-ui'
              },
              {
                name: 'mint-ui',
                url: 'http://mint-ui.github.io/#!/en'
              },
              {
                name: 'vuepress.vuejs.org',
                url: 'https://vuepress.vuejs.org/'
              },
              {
                name: 'eagle.js',
                url: 'https://zulko.github.io/eaglejs-demo/#/'
              },
              {
                name: 'bootstrap-vue',
                url: 'https://bootstrap-vue.js.org/'
              },
              {
                name: 'iviewui',
                url: 'https://www.iviewui.com/'
              },
              {
                name: 'onsen-for-vue',
                url: 'https://onsen.io/vue/'
              }
            ]
          },
          {
            name: 'React',
            links: [
              {
                name: 'reactjs.org',
                url: 'https://reactjs.org/'
              },
              {
                name: 'vulcanjs.org',
                url: 'http://vulcanjs.org/'
              },
              {
                name: 'nivo.rocks',
                url: 'https://nivo.rocks/'
              },
              {
                name: 'material-kit-react',
                url: 'https://www.creative-tim.com/product/material-kit-react/?partner=91096'
              },
              {
                name: 'ant design',
                url: 'https://ant.design/docs/react/introduce'
              },
              {
                name: 'react-admin',
                url: 'https://marmelab.com/react-admin/'
              },
              {
                name: 'shards-react',
                url: 'https://designrevision.com/downloads/shards-react/'
              },
              {
                name: 'material-ui',
                url: 'https://material-ui.com/'
              },
              {
                name: 'react-bootstrap',
                url: 'https://react-bootstrap.github.io/'
              },
              {
                name: 'react-virtualized',
                url: 'https://bvaughn.github.io/react-virtualized/#/components/List'
              },
              {
                name: 'argon-react',
                url: 'https://www.creative-tim.com/product/argon-design-system-react/?partner=91096'
              },
              {
                name: 'blueprintjs',
                url: 'https://blueprintjs.com/'
              },
              {
                name: 'semantic-ui-react',
                url: 'https://react.semantic-ui.com/'
              },
              {
                name: 'react-toolbax',
                url: 'http://react-toolbox.io/#/'
              },
              {
                name: 'react-desktop',
                url: 'http://reactdesktop.js.org/'
              },
              {
                name: 'onsen-for-react',
                url: 'https://onsen.io/react/'
              },
              {
                name: 'evergreen-segemnt',
                url: 'https://evergreen.segment.com/'
              },
              {
                name: 'reactstrap',
                url: 'https://reactstrap.github.io/'
              },
              {
                name: 'rebassjs',
                url: 'https://rebassjs.org/'
              },
              {
                name: 'grommet',
                url: 'https://v2.grommet.io/'
              },
              {
                name: 'elemental-ui',
                url: 'http://elemental-ui.com/'
              },
              {
                name: 'react-suite',
                url: 'https://rsuitejs.com/en/'
              },
              {
                name: 'belle',
                url: 'http://nikgraf.github.io/belle/'
              },
              {
                name: 'react-md',
                url: 'https://react-md.mlaursen.com/'
              },
              {
                name: 'primereact',
                url: 'https://www.primefaces.org/primereact/'
              },
              {
                name: 'kendoreact',
                url: 'https://www.telerik.com/kendo-react-ui/'
              }
            ]
          },
          {
            name: 'Angular',
            links: [
              {
                name: 'angular.io',
                url: 'https://angular.io/'
              },
              {
                name: 'onsen-for-angular',
                url: 'https://onsen.io/angular2/'
              }
            ]
          },
          {
            name: 'Laravel',
            links: [
              {
                name: 'laravel.com',
                url: 'https://laravel.com/'
              }
            ]
          },
          {
            name: 'Symfony',
            links: [
              {
                name: 'symfony.com',
                url: 'https://symfony.com/'
              }
            ]
          },
          {
            name: 'Python',
            links: [
              {
                name: 'Flask',
                url: 'https://palletsprojects.com/p/flask/'
              },
              {
                name: 'Django',
                url: 'https://www.djangoproject.com/'
              }
            ]
          },
          {
            name: 'Elixir',
            links: [
              {
                name: 'Phoenix Framework',
                url: 'http://www.phoenixframework.org/'
              },
              {
                name: 'Nerves',
                url: 'https://www.nerves-project.org/'
              },
              {
                name: 'Sugar',
                url: 'https://sugar-framework.github.io/'
              },
              {
                name: 'Hedwig',
                url: 'https://github.com/hedwig-im/hedwig'
              },
              {
                name: 'Plug',
                url: 'https://github.com/elixir-plug/plug'
              },
              {
                name: 'trot',
                url: 'https://github.com/hexedpackets/trot'
              },
              {
                name: 'Placid',
                url: 'https://github.com/slogsdon/placid'
              },
              {
                name: 'kitto',
                url: 'https://github.com/kittoframework/kitto'
              },
              {
                name: 'maru',
                url: 'https://github.com/elixir-maru/maru'
              },
              {
                name: 'Maru',
                url: 'https://maru.readme.io/docs'
              },
              {
                name: 'Anubis',
                url: 'https://github.com/BennyHallett/anubis'
              },
              {
                name: 'Urna',
                url: 'https://github.com/meh/urna'
              },
              {
                name: 'Flowex',
                url: 'https://github.com/antonmi/flowex'
              }
            ]
          }
        ]
      },
      {
        sectionName: 'PROGRAMMING LANGUAGES',
        subsections: [
          {
            name: '',
            links: [
              {
                name: 'JavaScript',
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
              },
              {
                name: 'TypeScript',
                url: 'https://www.typescriptlang.org/'
              },
              {
                name: 'Python',
                url: 'https://www.python.org/'
              },
              {
                name: 'PHP',
                url: 'https://www.php.net/'
              },
              {
                name: 'Java',
                url: 'https://en.wikipedia.org/wiki/Java_(programming_language)'
              },
              {
                name: 'C#',
                url: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
              },
              {
                name: 'HTML',
                url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
              },
              {
                name: 'CSS',
                url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
              },
              {
                name: 'C++',
                url: 'https://en.wikipedia.org/wiki/C%2B%2B'
              },
              {
                name: 'C',
                url: 'https://en.wikipedia.org/wiki/C_(programming_language)'
              },
              {
                name: 'Ruby',
                url: 'https://www.ruby-lang.org/'
              }
            ]
          }
        ]
      },
      {
        sectionName: 'GITHUB',
        subsections: [
          {
            name: '',
            links: [
              {
                name: 'vuejs / vue-next',
                url: 'https://github.com/vuejs/vue-next'
              },
              {
                name: 'nuxt/nuxt.js',
                url: 'https://github.com/nuxt/nuxt.js'
              },
              {
                name: 'vuetifyjs/vuetify',
                url: 'https://github.com/vuetifyjs/vuetify'
              },
              {
                name: 'vuejs/vue',
                url: 'https://github.com/vuejs/vue'
              },
              {
                name: 'nodejs/node',
                url: 'https://github.com/nodejs/node'
              },
              {
                name: 'kazupon/vue-i18n',
                url: 'https://github.com/kazupon/vue-i18n'
              }
            ]
          },
          {
            name: '',
            links: [
              {
                name: 'ariadne',
                url: 'https://github.com/mirumee/ariadne'
              },
              {
                name: 'saleor',
                url: 'https://github.com/mirumee/saleor'
              },
              {
                name: 'angular',
                url: 'https://github.com/angular/angular'
              },
              {
                name: 'cpython',
                url: 'https://github.com/python/cpython'
              },
              {
                name: 'laravel',
                url: 'https://github.com/laravel/laravel'
              },
              {
                name: 'mrdoob/three.js',
                url: 'https://github.com/mrdoob/three.js'
              }
            ]
          },
          {
            name: '',
            links: [
              {
                name: 'symfony',
                url: 'https://github.com/symfony/symfony'
              },
              {
                name: 'microsoft/terminal',
                url: 'https://github.com/microsoft/terminal'
              },
              {
                name: 'nuxt-community/modules',
                url: 'https://github.com/nuxt-community/modules'
              },
              {
                name: 'fullstackio/30-days-of-vue',
                url: 'https://github.com/fullstackio/30-days-of-vue'
              },
              {
                name: 'microsoft/TypeScript',
                url: 'https://github.com/microsoft/TypeScript'
              },
              {
                name: 'jasonlong / isometric-contributions',
                url: 'https://github.com/jasonlong/isometric-contributions'
              }
            ]
          },
          {
            name: '',
            links: [
              {
                name: 'storybook',
                url: 'https://github.com/storybookjs/storybook'
              },
              {
                name: 'atom',
                url: 'https://github.com/atom/atom'
              },
              {
                name: 'microsoft/vscode',
                url: 'https://github.com/microsoft/vscode'
              },
              {
                name: 'phoenixframework/ phoenix',
                url: 'https://github.com/phoenixframework/phoenix'
              },
              {
                name: 'erlang/otp',
                url: 'https://github.com/erlang/otp'
              },
              {
                name: 'albertpalka / joinit-project',
                url: 'https://github.com/albertpalka/joinit-project'
              }
            ]
          },
          {
            name: '',
            links: [
              {
                name: 'developer-roadmap',
                url: 'https://github.com/kamranahmedse/developer-roadmap'
              },
              {
                name: 'dahlbyk/posh-git',
                url: 'https://github.com/dahlbyk/posh-git'
              },
              {
                name: 'StylishThemes/GitHub-Dark',
                url: 'https://github.com/StylishThemes/GitHub-Dark'
              },
              {
                name: 'golang/go',
                url: 'https://github.com/golang/go'
              },
              {
                name: 'stefanhoelzl/vue.py',
                url: 'https://github.com/stefanhoelzl/vue.py'
              },
              {
                name: 'PanJiaChen / vue-element-admin',
                url: 'https://github.com/PanJiaChen/vue-element-admin'
              }
            ]
          },
          {
            name: '',
            links: [
              {
                name: 'quasarframework/ quasar',
                url: 'https://github.com/quasarframework/quasar'
              },
              {
                name: 'facebook/react',
                url: 'https://github.com/facebook/react'
              },
              {
                name: 'pallets/flask',
                url: 'https://github.com/pallets/flask'
              },
              {
                name: 'docker-ce',
                url: 'https://github.com/docker/docker-ce'
              },
              {
                name: 'maciejjeziorski/ laravel-best-practices-pl',
                url: 'https://github.com/maciejjeziorski/laravel-best-practices-pl'
              },
              {
                name: '',
                url: ''
              }
            ]
          },
          {
            name: '',
            links: [
              {
                name: 'jupeter/clean-code-php',
                url: 'https://github.com/jupeter/clean-code-php'
              },
              {
                name: 'azure-quickstart-templates',
                url: 'https://github.com/Azure/azure-quickstart-templates'
              },
              {
                name: 'k4m4/terminals-are-sexy',
                url: 'https://github.com/k4m4/terminals-are-sexy'
              },
              {
                name: 'ovh/python-ovh',
                url: 'https://github.com/ovh/python-ovh'
              },
              {
                name: 'ovh/php-ovh',
                url: 'https://github.com/ovh/php-ovh'
              },
              {
                name: 'github / gitignore',
                url: 'https://github.com/github/gitignore'
              }
            ]
          },
          {
            name: '',
            links: [
              {
                name: 'ovh/node-ovh',
                url: 'https://github.com/ovh/node-ovh'
              },
              {
                name: 'containous/traefik',
                url: 'https://github.com/containous/traefik'
              },
              {
                name: 'gentilkiwi/mimikatz',
                url: 'https://github.com/gentilkiwi/mimikatz'
              },
              {
                name: 'aceforth/nuxt-optimized-images',
                url: 'https://github.com/aceforth/nuxt-optimized-images'
              },
              {
                name: 'nuxt-community/awesome-nuxt',
                url: 'https://github.com/nuxt-community/awesome-nuxt'
              },
              {
                name: 'James-Yu / LaTeX-Workshop',
                url: 'https://github.com/James-Yu/LaTeX-Workshop'
              }
            ]
          },
          {
            name: '',
            links: [
              {
                name: 'apple/swift',
                url: 'https://github.com/apple/swift'
              },
              {
                name: 'facebook/jest',
                url: 'https://github.com/facebook/jest'
              },
              {
                name: 'VincentGarreau/particles.js',
                url: 'https://github.com/VincentGarreau/particles.js'
              },
              {
                name: 'vuejs/awesome-vue',
                url: 'https://github.com/vuejs/awesome-vue'
              },
              {
                name: 'boostercloud/booster',
                url: 'https://github.com/boostercloud/booster'
              },
              {
                name: 'shelfio / chrome-aws-lambda-layer',
                url: 'https://github.com/shelfio/chrome-aws-lambda-layer'
              },
              {
                name: 'goldbergyoni / nodebestpractices',
                url: 'https://github.com/goldbergyoni/nodebestpractices'
              },
              {
                name: 'puppeteer / puppeteer',
                url: 'https://github.com/puppeteer/puppeteer'
              }
            ]
          },
          {
            name: '',
            links: [
              {
                name: 'deepfakes / faceswap',
                url: 'https://github.com/deepfakes/faceswap'
              }
            ]
          }
        ]
      },
      {
        sectionName: 'YOUTUBE',
        subsections: [
          {
            name: '',
            links: [
              {
                name: 'overment',
                url: 'https://www.youtube.com/channel/UC_MIaHmSkt9JHNZfQ_gUmrg/videos'
              },
              {
                name: 'PyWaw',
                url: 'https://www.youtube.com/user/PyWaw/videos'
              },
              {
                name: 'Maciej Aniserowicz',
                url: 'https://www.youtube.com/channel/UCACp5rqV3Ki0SNdXWDBLhRA/videos'
              },
              {
                name: 'JavaDevMatt - Mateusz Kupilas',
                url: 'https://www.youtube.com/user/JavaDevMatt/videos'
              },
              {
                name: 'Google Developers',
                url: 'https://www.youtube.com/user/GoogleDevelopers/videos'
              },
              {
                name: 'Od zera do WebDeva',
                url: 'https://www.youtube.com/channel/UCrSxel4Mheo6XA8IPMA-3ZQ/videos'
              },
              {
                name: 'Pasja informatyki',
                url: 'https://www.youtube.com/user/MiroslawZelent/videos'
              },
              {
                name: 'WarsawJS',
                url: 'https://www.youtube.com/channel/UCzYf3wdKSKnR5lvkRVUyCYg/videos'
              },
              {
                name: 'Warsaw JUG',
                url: 'https://www.youtube.com/channel/UC2coGyxf5x_CzJ3l4F-N-Sw/videos'
              },
              {
                name: 'Samuraj Programowania',
                url: 'https://www.youtube.com/channel/UC6wlzVp-5TD5xfDwiohSDeg/videos'
              },
              {
                name: 'PHPers',
                url: 'https://www.youtube.com/user/PHPersPL/videos'
              },
              {
                name: 'Angular Wroclaw',
                url: 'https://www.youtube.com/channel/UCRifHGV65iEi3ElmejaMtYQ'
              }
            ]
          },
          {
            name: '',
            links: [
              {
                name: 'Fireship',
                url: 'https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA'
              }
            ]
          }
        ]
      },
      {
        sectionName: 'SOFTWARE',
        subsections: [
          {
            name: 'Code editors / IDE',
            links: [
              {
                name: 'Visual Studio Code',
                url: 'https://code.visualstudio.com/'
              },
              {
                name: 'Visual Studio',
                url: 'https://visualstudio.microsoft.com/vs/'
              },
              {
                name: 'Atom',
                url: 'https://atom.io/'
              },
              {
                name: 'Brackets',
                url: 'http://brackets.io/'
              },
              {
                name: 'Eclipse IDE',
                url: 'https://www.eclipse.org/eclipseide/'
              },
              {
                name: 'codeanywhere',
                url: 'https://codeanywhere.com/'
              },
              {
                name: 'Komodo IDE',
                url: 'https://www.activestate.com/products/komodo-ide/'
              },
              {
                name: 'WebStorm',
                url: 'https://www.jetbrains.com/webstorm/'
              },
              {
                name: 'PhpStorm',
                url: 'https://www.jetbrains.com/phpstorm/'
              },
              {
                name: 'PyCharm',
                url: 'https://www.jetbrains.com/pycharm/'
              },
              {
                name: 'IntelliJ IDEA',
                url: 'https://www.jetbrains.com/idea/'
              },
              {
                name: 'Notepad++',
                url: 'https://notepad-plus-plus.org/'
              },
              {
                name: 'Apache NetBeans',
                url: 'https://netbeans.apache.org/'
              },
              {
                name: 'Vim',
                url: 'https://www.vim.org/'
              },
              {
                name: 'Sublime Text',
                url: 'https://www.sublimetext.com/'
              },
              {
                name: 'Code::Blocks',
                url: 'http://www.codeblocks.org/'
              },
              {
                name: 'Xcode',
                url: 'https://developer.apple.com/xcode/'
              }
            ]
          },
          {
            name: 'Online code editors',
            links: [
              {
                name: 'Visual Studio Online',
                url: 'https://visualstudio.microsoft.com/services/visual-studio-online/'
              },
              {
                name: 'codepen.io',
                url: 'https://codepen.io/'
              },
              {
                name: 'codesandbox.io',
                url: 'https://codesandbox.io/'
              },
              {
                name: 'codeshare.io',
                url: 'https://codeshare.io/'
              },
              {
                name: 'jsfiddle.net',
                url: 'https://jsfiddle.net/'
              },
              {
                name: 'jsbin.com',
                url: 'https://jsbin.com/?html,output'
              },
              {
                name: 'playcode.io',
                url: 'https://playcode.io/'
              },
              {
                name: 'w3schools.com/tryit',
                url: 'https://www.w3schools.com/tryit/'
              },
              {
                name: 'editpad.org',
                url: 'https://www.editpad.org/'
              },
              {
                name: 'stackblitz.com',
                url: 'https://stackblitz.com/'
              },
              {
                name: 'gitpod.io',
                url: 'https://www.gitpod.io/'
              }
            ]
          },
          {
            name: 'Tools',
            links: [
              {
                name: 'git-scm.com',
                url: 'https://git-scm.com/'
              },
              {
                name: 'ohmyz.sh',
                url: 'https://ohmyz.sh/'
              },
              {
                name: 'hyper.is',
                url: 'https://hyper.is/'
              },
              {
                name: 'Windows Terminal',
                url: '"https://www.microsoft.com/en-us/p/windows-terminal-preview/9n0dx20hk701?activetab=pivot:overviewtab'
              },
              {
                name: 'putty.org',
                url: 'https://www.putty.org/'
              }
            ]
          },
          {
            name: 'WWW Servers',
            links: [
              {
                name: 'nginx.org',
                url: 'https://nginx.org/'
              },
              {
                name: 'nginx.com',
                url: 'https://www.nginx.com/'
              },
              {
                name: 'lighttpd.net',
                url: 'https://www.lighttpd.net/'
              },
              {
                name: 'apache.org',
                url: 'https://httpd.apache.org/'
              },
              {
                name: 'docs.traefik.io',
                url: 'https://docs.traefik.io/'
              },
              {
                name: 'tomcat.apache.org',
                url: 'http://tomcat.apache.org/'
              },
              {
                name: 'litespeedtech.com',
                url: 'https://www.litespeedtech.com/'
              },
              {
                name: 'caddyserver.com',
                url: 'https://caddyserver.com/'
              },
              {
                name: 'h2o.examp1e.net',
                url: 'https://h2o.examp1e.net/'
              },
              {
                name: 'cherokee-project.com',
                url: 'https://cherokee-project.com/'
              },
              {
                name: 'iis.net',
                url: 'https://www.iis.net/'
              }
            ]
          },
          {
            name: 'Extensions VSC',
            links: [
              {
                name: 'Debugger for Chrome',
                url: 'https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome'
              },
              {
                name: 'JavaScript (ES6) code snippets',
                url: 'https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets'
              },
              {
                name: 'ESLint',
                url: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint'
              },
              {
                name: 'Live Server',
                url: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer'
              },
              {
                name: 'Bracket Pair Colorizer',
                url: 'https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer'
              },
              {
                name: 'Auto Rename Tag',
                url: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag'
              },
              {
                name: 'Quokka.js',
                url: 'https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode'
              },
              {
                name: 'Path Intellisense',
                url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense'
              },
              {
                name: 'Project Manager',
                url: 'https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager'
              },
              {
                name: 'EditorConfig for VS Code',
                url: 'https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig'
              },
              {
                name: 'Sublime Text Keymap',
                url: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings'
              },
              {
                name: 'Browser Preview',
                url: 'https://marketplace.visualstudio.com/items?itemName=auchenberg.vscode-browser-preview'
              },
              {
                name: 'GitLens',
                url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens'
              },
              {
                name: 'Polacode',
                url: 'https://marketplace.visualstudio.com/items?itemName=pnp.polacode'
              },
              {
                name: 'Prettier',
                url: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode'
              },
              {
                name: 'vscode-icons',
                url: 'https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons'
              },
              {
                name: 'Material Icon Theme',
                url: 'https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme'
              },
              {
                name: 'Setting Sync',
                url: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync'
              },
              {
                name: 'Better Aling',
                url: 'https://marketplace.visualstudio.com/items?itemName=wwm.better-align'
              },
              {
                name: 'Vim',
                url: 'https://marketplace.visualstudio.com/items?itemName=vscodevim.vim'
              },
              {
                name: 'SFTP',
                url: 'https://marketplace.visualstudio.com/items?itemName=liximomo.sftp'
              }
            ]
          }
        ]
      },
      {
        sectionName: 'MOBILE APPLICATIONS',
        subsections: [
          {
            name: 'Frameworks',
            links: [
              {
                name: 'React Native',
                url: 'https://reactnative.dev/'
              },
              {
                name: 'Flutter',
                url: 'https://flutter.dev/'
              },
              {
                name: 'NativeScript',
                url: 'https://www.nativescript.org/'
              },
              {
                name: 'Xamarin',
                url: 'https://dotnet.microsoft.com/apps/xamarin'
              },
              {
                name: 'Onsen UI',
                url: 'https://onsen.io/'
              },
              {
                name: 'Ionic',
                url: 'https://ionicframework.com/'
              }
            ]
          },
          {
            name: '',
            links: [
              {
                name: 'Android Studio',
                url: 'https://developer.android.com/studio'
              }
            ]
          }
        ]
      },
      {
        sectionName: 'SECURITY  ',
        subsections: [
          {
            name: 'Portals',
            links: [
              {
                name: 'Sekurak.pl',
                url: 'https://sekurak.pl/'
              },
              {
                name: 'Niebezpiecznik.pl',
                url: 'https://niebezpiecznik.pl/'
              }
            ]
          }
        ]
      },
      {
        sectionName: 'OTHER',
        subsections: [
          {
            name: '',
            links: [
              {
                name: 'w3schools.com',
                url: 'https://www.w3schools.com/'
              }
            ]
          }
        ]
      }
    ]
  }

  render() {
    this.state.totalNumberOfResources = this.state.content.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.subsections.reduce((acc, curr) => {
        return acc + curr.links.length
      }, 0)
    }, 0)

    return (
      <div className={styles.container}>
        <Head>
          <title>
            hypercode.it
          </title>
          <meta name="description" content="A collection of useful resources for programmers and people associated with IT. Pages, tools, information, repositories, YouTube channels and more. Website in constant development." />
          <meta name="keywords" content="hypercode, it, hyper, code, technologies, programming, programs, javascript, web, development, framework, vue, react, angular" />
        </Head>

        <div className={styles.description}>
          A website with various interesting resources such as websites, blogs and portals about programming and broadly understood IT. That is the goal. The website is currently under construction and will be constantly modified. All resources and materials will also be updated regularly. The artwork is now very simplified but it will be improved over time :). The motivation for creating this website is the desire to aggregate many interesting content for programmers and IT people in one place, divided into various categories.
        </div>

        <div style={{color: 'red'}}>
          The website uses cookies and Google Analytics only for the purpose of website traffic analysis.
        </div>

        <div className={styles.description}>
          Total number of resources: { this.state.totalNumberOfResources }
        </div>
  
        <div>
          { this.state.content.map((item, index) => (
            <div key={index}>
              <h3 style={{borderTop: '1px solid #e6e6e6', paddingTop: '30px'}}>
                { item.sectionName }
              </h3>

              <div className={styles['content-subsection']}>
                { item.subsections.map((item2, index) => (
                  <div key={index}>
                    { item2.name.length > 0 &&
                      <span className={styles['section-title']}>
                        { item2.name }
                      </span>
                    }
                    <ul className={styles['ul-list']}>
                      { item2.links.map((item3, index) => (
                        <li className={styles['li-element']} key={index}>
                          <a href={item3.url} target="_blank" className={styles['a-link']}>
                            { item3.name }
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Home
