import Feedback from "../../database/models/Feedback";

export default class FeedbackService {
  public static async createFeedback(dto) {
    const { userId, goodId, rate, comment } = dto;
    const feedback = await Feedback.create({
      userId: userId,
      goodId: goodId,
      rate: rate,
      comment: comment,
    });

    return feedback
  }

  public static async getAllFeedbacks() {
    const feedbacks = await Feedback.findAndCountAll();
    return feedbacks;
  }
}
