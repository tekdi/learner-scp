import axios from 'axios';
const CREATE_ASSESSMENT_API_URL = process.env.REACT_APP_CREATE_ASSESSMENT_API_URL;


export const assessmentStatusCheck = async (userId) => {
  try {
    const response = await axios.post(
        `${CREATE_ASSESSMENT_API_URL}/api/v1/tracking-assesment/list`,
        {
          "filters": {
            "userId": userId,
            "contentId": "do_2129493126207324161154"
          },
          "pagination": {
            "pageSize": 0,
            "page": 0
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


export const assessmentTracking = async (scoreDetails) => {

  const userId = localStorage.getItem('userId')
  try {
    const response = await axios.post(
        `${CREATE_ASSESSMENT_API_URL}/api/v1/tracking-assesment`,
        {
          'userId': userId,
          'courseId': 'testID1234',
          'batchId': '01295501508689100844',
          'contentId': 'do_2129493126207324161154',
          'attemptId': '638a8d6240f8df4b8cc5ef9b79fa0d67',
          'assessmentSummary': [
            {
              'data': scoreDetails,
              'sectionId': 'do_1140003637694791681636',
              'sectionName': 'Level 1'
            }
          ],
          'totalMaxScore': 8,
          'totalScore': 1,
          "lastAttemptedOn": "2024-05-17 10:14:59.931232+00",
          'timeSpent': 0
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
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};
