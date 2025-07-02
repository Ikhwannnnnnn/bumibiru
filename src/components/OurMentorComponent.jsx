import { mentorItems } from "../data/Data";
import MentorItem from "./MentorItem";
import { Row } from "react-bootstrap";
const OurMentorComponent = () => {
    return (
        <>
            <h2 id="our_mentor" className="my-2 text-center sectionHeader mt-5 text-light"> Berita Terbaru </h2>
            <Row xs={1} md={2} lg={4} className="our_mentor py-3 my-4">
                {mentorItems.map((item) => (
                    <MentorItem key={item.id} item={item} />
                ))}
            </Row>
        </>
    );
}

export default OurMentorComponent