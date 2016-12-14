const CoveoAPI = {};

CoveoAPI.fieldsIncluded = [
  "tpprixbande",
  "tpdisponibilite",
  "tpthumbnailuri",
  "tpregion",
  "tpaccordsnommenu",
  "sysclickableuri",
  "tpcategorie",
  "tppastilledegout",
  "tpcodesaq",
  "tpprixrabais",
  "tpprixinitial",
  "tpprixnormal",
  "systitle",
  "tpformat",
  "tpenspecial",
  "tppays",
  "tpcepagesplitgroup",
  "tpcepagenomsplitgroup",
  "tpparticularite",
  "tpparticularitesplitgroup"
];

CoveoAPI.createGroupByEntry = (field) => {

  return {
    field: field,
    maximumNumberOfValues:0,
    sortCriteria:"occurences",
    injectionDepth: 1000,
    completeFacetWithStandardValues: true
  };
  
}

CoveoAPI.apiURL = 'https://cloudplatform.coveo.com/rest/search';

CoveoAPI.postRequestAuthorizationHeader = {
  "Authorization": "Bearer 6318103b-f9da-437c-854b-9e6f1f44e27b"
};

CoveoAPI.postRequestBodyFrame = {
   "q": "vin rouge",
   "firstResult": 0,
   "numberOfResults": 96,
   "enableDidYouMean": true,
   "sortCriteria": "Relevancy",
   "groupBy": [
      {
         "field": "@tpcategorie",
         "maximumNumberOfValues": 12,
         "sortCriteria": "occurences",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      },
      {
         "field": "@tpdisponibilite",
         "maximumNumberOfValues": 12,
         "sortCriteria": "occurences",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      },
      {
         "field": "@tpenspecial",
         "maximumNumberOfValues": 12,
         "sortCriteria": "occurences",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      },
      {
         "field": "@tpformat",
         "maximumNumberOfValues": 12,
         "sortCriteria": "occurences",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      },
      {
         "field": "@tpparticularitesplitgroup",
         "maximumNumberOfValues": 12,
         "sortCriteria": "occurences",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      },
      {
         "field": "@tppastilledegout",
         "maximumNumberOfValues": 12,
         "sortCriteria": "occurences",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      },
      {
         "field": "@tppays",
         "maximumNumberOfValues": 12,
         "sortCriteria": "occurences",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      },
      {
         "field": "@tpprixbande",
         "maximumNumberOfValues": 12,
         "sortCriteria": "occurences",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      },
      {
         "field": "@tpregion",
         "maximumNumberOfValues": 12,
         "sortCriteria": "occurences",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      }
   ],
   "timezone": "America/Montreal",
   "retrieveFirstSentences": true,
   "debug": false,
   "fieldsToInclude": CoveoAPI.fieldsIncluded,
   "enableDuplicateFiltering": false,
   "enableCollaborativeRating": false
};

CoveoAPI.updateBody = (updatedProperties) => {
  return Object.assign({},CoveoAPI.postRequestBodyFrame, updatedProperties);
};

export default CoveoAPI;
