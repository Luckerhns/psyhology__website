import FeedbackService from "../services/Feedback.service"

export default class FeedbackController {
    static async createFeedback(req, res, next) {
        const dto = req.body
        const feedback = await FeedbackService.createFeedback(dto)

        return res.json(feedback)
    }

    static async getAllFeedbacks(req, res, next) {
        const feedbacks = await FeedbackService.getAllFeedbacks()
        
        return res.json(feedbacks)
    }
}