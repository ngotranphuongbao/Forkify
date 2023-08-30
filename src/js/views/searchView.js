import icons from 'url:../../img/icons.svg';
import View from './View';
import previewView from './previewView.js';

class SearchView extends View {
  _parentEl = document.querySelector('.search');

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }
  addHandlerSearch(handler) {
    this._parentEl
      .querySelector('.search__btn')
      .addEventListener('click', function (e) {
        e.preventDefault();
        handler();
      });
  }
}

export default new SearchView();
