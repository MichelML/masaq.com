import $ from 'jquery';
const Hash = {};

Hash.initListener = (callback) => {
  if (!Hash.isListenerInitialized) {
    Hash.isListenerInitialized = true;
    window.onhashchange = callback;
  }
}

Hash.setNewHash = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
  }

  if (e.keyCode === 13 || e.type === "click") {
    let $searchBar = $('#search-bar');
    let q = $searchBar.val() ? `q=${window.encodeURIComponent($searchBar.val())}!!` : "";
    let aq = (() => {
      let aQ = "";
      let $fieldsets = $('#filters fieldset');

      if ($fieldsets.length < 1) {
        return "";
      }

      $fieldsets.each((i, elem) => {
        let $elem = $(elem);
        if ($elem.serialize()) {
          aQ += '@' + $elem.attr('id') + '==("' + $elem.serialize().replace(/=.+?(&|.$)/g, '","').replace(/(,")$/g, ')').replace()
          aQ += " ";
        }
      });

      return ((aQ.trim()) ? `aq=${window.encodeURIComponent(aQ.trim())}!!` : "");
    })();

    const sortCriteria = (() => {
      const $activeTab = $('.mdl-layout__tab.is-active')
      let sortCriteria;

      if ($activeTab.length < 1 || $activeTab.text() === "Pertinence") {
        return "sortCriteria=relevancy";
      } 
      else {
        if (/arrow_up/.test($activeTab.text())) {
          sortCriteria = window.encodeURIComponent("@tpprixnum ascending");
        } else {
          sortCriteria = window.encodeURIComponent("@tpprixnum descending");
        }
      }
      
      return `sortCriteria=${sortCriteria}`
    })();

    let newHash = `${q}${aq}${sortCriteria}`;
    window.location.hash = newHash.replace(/(!!)$/g, "");
  }
}

Hash.parseNewHash = (hash) => {
  if (!hash) {
    return {};
  }

  let parsedHash = hash.replace(/^#/g, '').split("!!")

  .filter((propsAndValues) => {
    return propsAndValues.split('=')[0];
  })

  .reduce((propsAndValues, propAndVal) => {
    return propsAndValues.concat(propAndVal.split('='));
  }, [])

  .reduce((queryUpdates, queryPropOrValues, i, array) => {
    if (i % 2 === 0) {
      queryUpdates[queryPropOrValues] = decodeURIComponent(decodeURIComponent(array[i + 1]));
    }
    return queryUpdates;
  }, {});
  
  if (parsedHash['aq']) {
    parsedHash['aq'] = parsedHash['aq'].replace("En spécial", "true");
  }
  return parsedHash;
}

export default Hash;
