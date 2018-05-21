import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom'

export default (props) => {
    console.log("props", props)
    return (
        <div className="notelist">
            <h3>Your Notes:</h3>
            <div className="nlist-wrapper">

                {props.notes.map((e, i) => {
                    return (
                        <Link to={`/notes/${e.id}`} key={e.i} className="noDecoration">
                            <Card key={e.i}>
                                <CardBody>
                                    <CardTitle>{e.title}</CardTitle>
                                    <CardText>{e.text}</CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}