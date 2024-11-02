import { h, Fragment } from 'preact';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import algoliasearch from 'algoliasearch';

const appId = 'D1I9OIP9XS';
const apiKey = '9e761ae36a56e56c3660092dcc5236f5';
const searchClient = algoliasearch(appId, apiKey);

const querySuggestionsPlugin = createQuerySuggestionsPlugin({
  searchClient,
  indexName: 'instant_search_demo_query_suggestions',
  getSearchParams: () => ({ clickAnalytics: true }),
});

autocomplete({
  container: '#autocomplete',
  openOnFocus: true,
  insights: true,
  plugins: [querySuggestionsPlugin],
  insightsClient('init', { appId, apiKey, useCookie: true }),
  getSources({ query }) {
    return [
      {
        sourceId: 'products',
        getItems() {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: 'instant_search',
                params: {
                  query,
                  clickAnalytics: true,
                },
              },
            ],
          });
        },
        templates: {
          item({ item, components, html }) {
            return html`<div class="aa-ItemWrapper">
              <div class="aa-ItemContent">
                <div class="aa-ItemIcon">
                  <img
                    src="${item.image}"
                    alt="${item.name}"
                    width="40"
                    height="40"
                  />
                </div>
                <div class="aa-ItemContentBody">
                  <div class="aa-ItemContentTitle">
                    ${components.Highlight({ hit: item, attribute: 'name' })}
                  </div>
                  <div class="aa-ItemContentDescription">
                    ${components.Snippet({
                      hit: item,
                      attribute: 'description',
                    })}
                  </div>
                </div>
              </div>
              <button
                class="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly"
                type="button"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path
                    d="M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z"
                  ></path>
                </svg>
              </button>
            </div>`;
          },
        },
      },
    ];
  },
});