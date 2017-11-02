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
  "tpprixnum",
  "systitle",
  "tpformat",
  "tpenspecial",
  "tppays",
  "tpcepagesplitgroup",
  "tpcepagenomsplitgroup",
  "tpmillesime",
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
  "Authorization": "Bearer 058c85fd-3c79-42a3-9236-b83d35588103"
};

CoveoAPI.postRequestBodyFrame = {
   "q": "",
   "dq": "@tpenspecial==(true)",
   "partialMatch": true,
   "partialMatchKeyWords": 0,
   "firstResult": 0,
   "numberOfResults": 24,
   "enableDidYouMean": true,
   "sortCriteria": "Relevancy",
   "groupBy": [
      {
         "field": "@tpcategorie",
         "maximumNumberOfValues": 200,
         "sortCriteria": "alphaascending",
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
         "maximumNumberOfValues": 24,
         "sortCriteria": "occurences",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      },
      {
         "field": "@tpparticularitesplitgroup",
         "maximumNumberOfValues": 24,
         "sortCriteria": "alphaascending",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      },
      {
         "field": "@tppastilledegout",
         "maximumNumberOfValues": 50,
         "sortCriteria": "alphaascending",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      },
      {
         "field": "@tppays",
         "maximumNumberOfValues": 50,
         "sortCriteria": "alphaascending",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      },
      {
         "field": "@tpregion",
         "maximumNumberOfValues": 50,
         "sortCriteria": "alphaascending",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      },
      {
         "field": "@tpmillesime",
         "maximumNumberOfValues": 100,
         "sortCriteria": "alphadescending",
         "injectionDepth": 1000,
         "completeFacetWithStandardValues": true
      }

   ],
   "timezone": "America/Montreal",
   "retrieveFirstSentences": true,
   "debug": false,
   "fieldsToInclude": CoveoAPI.fieldsIncluded,
   "enableDuplicateFiltering": true,
   "enableCollaborativeRating": false
};

CoveoAPI.updateBody = (updatedProperties) => {
  return Object.assign({},CoveoAPI.postRequestBodyFrame, updatedProperties);
};

export default CoveoAPI;
