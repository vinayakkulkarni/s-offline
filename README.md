# s-offline ⚡️

[![Continuous Integration](https://github.com/vinayakkulkarni/s-offline/actions/workflows/ci.yml/badge.svg)](https://github.com/vinayakkulkarni/s-offline/actions/workflows/ci.yml)
[![Ship js trigger](https://github.com/vinayakkulkarni/s-offline/actions/workflows/shipjs-trigger.yml/badge.svg)](https://github.com/vinayakkulkarni/s-offline/actions/workflows/shipjs-trigger.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vinayakkulkarni/s-offline?sort=semver&logo=github)](https://github.com/vinayakkulkarni/s-offline/releases)
[![npm](https://img.shields.io/npm/v/s-offline?logo=npm)](https://www.npmjs.com/package/s-offline)
[![npm](https://img.shields.io/npm/dm/s-offline?logo=npm)](http://npm-stat.com/charts.html?package=s-offline)
[![npm bundle size (version)](https://img.shields.io/bundlephobia/min/s-offline/latest)](https://bundlephobia.com/package/s-offline@latest)
[![npm type definitions](https://img.shields.io/npm/types/s-offline)](https://github.com/vinayakkulkarni/s-offline/blob/master/package.json)
[![DeepScan grade](https://deepscan.io/api/teams/9055/projects/16121/branches/339368/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9055&pid=16121&bid=339368)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/vinayakkulkarni/s-offline)](https://snyk.io/test/github/vinayakkulkarni/s-offline)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/github/vinayakkulkarni/s-offline?logo=lgtm)](https://lgtm.com/projects/g/vinayakkulkarni/s-offline/alerts/)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/vinayakkulkarni/s-offline?logo=lgtm)](https://lgtm.com/projects/g/vinayakkulkarni/s-offline/context:javascript)
[![GitHub contributors](https://img.shields.io/github/contributors/vinayakkulkarni/s-offline)](https://github.com/vinayakkulkarni/s-offline/graphs/contributors)
[![FOSSA](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvinayakkulkarni%2Fs-offline.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvinayakkulkarni%2Fs-offline?ref=badge_shield)

[![eslint](https://img.shields.io/npm/dependency-version/s-offline/dev/eslint?logo=eslint)](https://eslint.org/)
[![prettier](https://img.shields.io/npm/dependency-version/s-offline/dev/prettier?logo=prettier)](https://prettier.io/)
[![vite](https://img.shields.io/npm/dependency-version/v-image/dev/vite?logo=vite)](https://vitejs.dev/)
[![svelte](https://img.shields.io/npm/dependency-version/s-offline/dev/svelte?logo=svelte)](https://svelte.dev/)
[![typescript](https://img.shields.io/npm/dependency-version/s-offline/dev/typescript?logo=TypeScript)](https://www.typescriptlang.org/)

## Features

- Detect offline & online events for your Svelte app, inspired from [v-offline](https://github.com/vinayakkulkarni/v-offline)
- Built from scratch using TypeScript

## Table of Contents

- [s-offline ⚡️](#s-offline-️)
	- [Features](#features)
	- [Table of Contents](#table-of-contents)
	- [Demo](#demo)
	- [Requirements](#requirements)
		- [Installation](#installation)
		- [Build Setup](#build-setup)
	- [Usage](#usage)
			- [Example](#example)
	- [API](#api)
		- [Props](#props)
		- [Events](#events)
	- [Built with](#built-with)
	- [Contributing](#contributing)
	- [Author](#author)
	- [License](#license)

## Demo

[![Edit s-offline demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/s-offline?file=src/App.svelte)

## Requirements

- [Svelte 3](https://svelte.dev/)

### Installation

```sh
npm install --save s-offline
```

CDN: [UNPKG](https://unpkg.com/s-offline/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/s-offline/dist/) (available as `window.SOffline`)

### Build Setup

```bash
# install dependencies
$ npm ci

# package the library
$ npm run build
```

## Usage

```javascript
import { SOffline } from 's-offline';
```

#### Example

<details>
<summary>
<em>Detailed Example (<a href="examples/App.svelte">refer App.svelte</a>)</em>
</summary>

```html
<script>
  import SOffline from 's-offline';
  const handleNetworkChange = (status) => {
    console.log('event details: ', status);
  };
</script>

<SOffline
  pingUrl="https://bitly.com"
  on:detectedCondition="{handleNetworkChange}"
>
  <span slot="online" class="online"> 😊 </span>
  <span slot="offline" class="offline"> 🤕 </span>
</SOffline>

<style>
  .online {
    font-size: 10rem;
    text-align: center;
  }
  .offline {
    font-size: 10rem;
    text-align: center;
  }
</style>
```

</details>

## API

### Props

| Name      | Type   | Required? | Default            | Description                                              |
| --------- | ------ | --------- | ------------------ | -------------------------------------------------------- |
| `pingUrl` | String | No        | https://google.com | Pinging any url to double check if you're online or not. |

### Events

| Name                | Returns | Description           |
| ------------------- | ------- | --------------------- |
| `detectedCondition` | String  | Emits a boolean value |

## Built with

- [TypeScript](https://www.typescriptlang.org/)
- [Svelte 3](https://svelte.dev/)

## Contributing

1. Fork it ( [https://github.com/vinayakkulkarni/s-offline/fork](https://github.com/vinayakkulkarni/s-offline/fork) )
2. Create your feature branch (`git checkout -b feat/new-feature`)
3. Commit your changes (`git commit -Sam 'feat: add feature'`)
4. Push to the branch (`git push origin feat/new-feature`)
5. Create a new [Pull Request](https://github.com/vinayakkulkarni/s-offline/compare)

_Note_:

1. Please contribute using [GitHub Flow](https://web.archive.org/web/20191104103724/https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_

## Author

**s-offline** &copy; [Vinayak](https://vinayakkulkarni.dev), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/s-offline/contributors)).

> [vinayakkulkarni.dev](https://vinayakkulkarni.dev) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fvinayakkulkarni%2Fs-offline.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fvinayakkulkarni%2Fs-offline?ref=badge_large)
