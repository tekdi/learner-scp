import instance from './interceptor';
const CREATE_ASSESSMENT_API_URL = process.env.REACT_APP_CREATE_ASSESSMENT_API_URL;

export const assessmentStatusCheck = async (userId , identifier) => {
  try {
    const response = await instance.post(
        `${CREATE_ASSESSMENT_API_URL}/tracking-assessment/v1/list`,
        {
          "filters": {
            "userId": userId,
            "contentId": identifier
          },
          "pagination": { 
            "pageSize": 1,
            "page": 1
          },
          "sort": {
            "field": "userId",
            "order": "asc"
          }
        },
        {
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
          }
        }
      );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || ' failed');
  }
}; 

export const contentSearch = async (state) => {

  try {
    const response = await instance.post(
      'https://sunbirdsaas.com/api/content/v1/search',
      {
        'request': {
          'filters': {
            'program': [
              'Second chance'
            ],
            'se_boards': [
              state
            ],
            'primaryCategory': [
              'Practice Question Set'
            ],
            'visibility': [
              'Default',
              'Parent'
            ]
          },
          'limit': 100,
          'sort_by': {
            'lastPublishedOn': 'desc'
          },
          'facets': [
            'se_boards',
            'se_gradeLevels',
            'se_subjects',
            'se_mediums',
            'primaryCategory'
          ],
          'offset': 0
        }
      },
      {
        params: {
          'orgdetails': 'orgName,email',
          'licenseDetails': 'name,description,url'
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_SAAS_TOKEN}`
        }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Search failed');
  }
};

export const mainContentSearch = async (identifier) => {
  try {
    const response = await instance.get(
      `https://sunbirdsaas.com/learner/questionset/v1/hierarchy/${identifier}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Search failed');
  }
};

export const assessmentTracking = async (scoreDetails, identifierWithoutImg, maxScore, score , seconds) => {

  console.log(scoreDetails);

  const userId = localStorage.getItem('userId')

  try {
    const response = await instance.post(
        `${CREATE_ASSESSMENT_API_URL}/tracking-assessment/v1/create`,
        {
          'userId': userId,
          'courseId': 'testID1234',
          'batchId': '01295501508689100844',
          'contentId': identifierWithoutImg,
          'attemptId': '638a8d6240f8df4b8cc5ef9b79fa0d67',
          'assessmentSummary': [scoreDetails],
          'totalMaxScore': maxScore || 0,
          'totalScore': score || 0,
          "lastAttemptedOn": "2024-05-17 10:14:59.931232+00",
          'timeSpent': seconds || 0
        },
        {
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
          }
        }
      );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || alert('Assessment Submission Failed'));
  }
};
