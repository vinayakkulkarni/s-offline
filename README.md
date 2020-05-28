# S-Offline 🗼

<a href="http://npmjs.org/package/s-offline"><img src="https://img.shields.io/npm/v/s-offline.svg" alt="npm version"></a> <a href="https://github.com/vinayakkulkarni/s-offline/releases"><img alt="GitHub release (latest by date including pre-releases)" src="https://img.shields.io/github/v/release/vinayakkulkarni/s-offline?include_prereleases"></a> <a href="https://github.com/vinayakkulkarni/s-offline/actions?query=workflow%3A%22Ship+js+trigger%22"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/vinayakkulkarni/s-offline/Ship%20js%20trigger"></a> <a href="https://bundlephobia.com/result?p=s-offline"><img src="http://img.badgesize.io/vinayakkulkarni/s-offline/master/dist/s-offline.min.js?compression=gzip" alt="gzip size"></a> <a href="http://npm-stat.com/charts.html?package=s-offline"><img src="https://img.shields.io/npm/dm/s-offline.svg" alt="npm downloads"></a> <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fvinayakkulkarni%2Fs-offline?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fvinayakkulkarni%2Fs-offline.svg?type=shield"/></a>


* Detect offline & online events for your svelte app, inspired from [v-offline](https://github.com/vinayakkulkarni/v-offline)

* This is [on GitHub](https://github.com/vinayakkulkarni/s-offline) so let me know if I've b0rked it somewhere, give me a star :star: if you like it :beers:

## Demo

[![Edit s-offline-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/svelte-s-offline-demo-ziixr?fontsize=14&hidenavigation=1&theme=dark)

## Requirements

* [Svelte](https://svelte.dev/) 3.x

## Installation

```bash
npm i s-offline # yarn add s-offline
```

CDN: [UNPKG](https://unpkg.com/s-offline/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/s-offline/dist/)

## Usage

<details>
<summary>
<em>Detailed Example (<a href="examples/App.svelte">refer App.svelte</a>)</em>
</summary>

```html
<script>
  import SOffline from 's-offline';
	const handleNetworkChange = ({ detail }) => {
		console.log('event details: ', detail);
	}
</script>

<SOffline
	pingUrl="https://bitly.com"
	on:detectedCondition={handleNetworkChange}>
		<span slot="online" class="online">
			😊
		</span>
		<span slot="offline" class="offline">
			🤕
		</span>
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

### Props

| Name            | Type   | Required? | Default              | Description                                                 |
| --------------  | ------ | --------- | ---------            | ----------------------------------------------------------- |
| `pingUrl`       | String | No        | https://google.com   | Pinging any url to double check if you're online or not.    |

### Events

| Name                 | Description                                                                 |
| -------------------- | --------------------------------------------------------------------------- |
| `detectedCondition`  | Emits an Boolean value which can be used for multiple purposes in your app. |

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

**s-offline** © [Vinayak](https://github.com/vinayakkulkarni), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/s-offline/contributors)).

> [vinayakkulkarni.dev](https://vinayakkulkarni.dev) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fvinayakkulkarni%2Fs-offline.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fvinayakkulkarni%2Fs-offline?ref=badge_large)