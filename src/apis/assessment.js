import axios from 'axios';
const CREATE_ASSESSMENT_API_URL = process.env.REACT_APP_CREATE_ASSESSMENT_API_URL;

export const assessmentTracking = async (scoreDetails) => {
  try {
    const response = await axios.post(
        `${CREATE_ASSESSMENT_API_URL}/api/v1/tracking-assesment`,
        {
          'userId': '30b2571f-08f9-49ce-b97a-c643df0c82f7',
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
