import $ from 'jquery';
import SAQ from './saq.js';
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

    let sortCriteria = (() => {
      const $activeTab = $('.mdl-layout__tab.is-active')
      let sortCriteria;

      if ($activeTab.length < 1 || $activeTab.text() === "Pertinence") {
        return "sortCriteria=relevancy!!";
      } 
      else {
        if (/arrow_up/.test($activeTab.text())) {
          sortCriteria = window.encodeURIComponent("@tpprixnum ascending");
        } else {
          sortCriteria = window.encodeURIComponent("@tpprixnum descending");
        }
      }
      
      return `sortCriteria=${sortCriteria}!!`
    })();

    let firstResult = (() => {
      if (SAQ.getNumberOfResults() && e.target.id === "more-results") {
         return `firstResult=${SAQ.getNumberOfResults()}`;
      }
      return "";
    })();


    let newHash = `${q}${aq}${sortCriteria}${firstResult}`;
    newHash.replace(/(!!)$/g, "");
    window.location.hash = newHash;
  }
}

Hash.parseNewHash = (hash) => {
  if (!hash) {
    Hash.resetAppValues({});
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
  
  Hash.resetAppValues(parsedHash);

  if (parsedHash['aq']) {
    parsedHash['aq'] = parsedHash['aq'].replace("En spécial", "true");
  }

  return parsedHash;
}

Hash.resetAppValues = (parsedHash) => {
  // reset values only for sort tabs and search bar
  // filters always stay as they currently are to avoid
  // cognitive overload
  const sortCriteria = parsedHash["sortCriteria"] || "relevancy";
  const q = parsedHash["q"] || "";

  let $sortTabs = $('.mdl-layout__tab');
  let $activeTab;
  $sortTabs.removeClass('is-active mdl-shadow--4dp');
  if (sortCriteria === "relevancy") {
    $('#Pertinence').addClass('is-active mdl-shadow--4dp');    
  } 
  else if (sortCriteria === "@tpprixnum ascending") {
    $activeTab = $('#Prix');
    $activeTab.addClass('is-active mdl-shadow--4dp');    
    $activeTab.find('.tab-icon').text('keyboard_arrow_up');    
  } else {
    $activeTab = $('#Prix');
    $activeTab.addClass('is-active mdl-shadow--4dp');
    $activeTab.find('.tab-icon').text('keyboard_arrow_down');    
  }

  $('#search-bar').val(q);

}

export default Hash;
