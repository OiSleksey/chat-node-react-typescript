import React, { useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { connect } from 'react-redux';
import './FieldСorrespondence.scss';
import { arrPostGetMessage } from '../../redux/selectors/chatWithAi.selector';
import { correspodenceHeightSelector } from '../../redux/selectors/heightCorrespodence.selector';
import PostMessage from '../PostMessage/PostMessage';
import GetMessage from '../GetMessage/GetMessage';

const FieldСorrespondence = ({ arrMesseges, correspodenceHeight }) => {
  const myRef = useRef();

  const scrollToBottom = () => {
    scroll.scrollToBottom({
      duration: 500,
      delay: 100,
      smooth: 'easeInOutQuart',
      containerId: 'scroll-container',
    });
  };

  useEffect(() => {
    if (myRef.current) {
      myRef.current.style.maxHeight = `${correspodenceHeight}px`;
    }
  }, [correspodenceHeight]);

  useEffect(() => {
    scrollToBottom();
  }, [arrMesseges]);

  const styleBody = arrMesseges ? { padding: '10px' } : { padding: '0' };
  const items = arrMesseges
    ? arrMesseges.map((element, index) => {
        return (
          <div key={index}>
            <PostMessage
              key={index}
              question={element.question}
              time={element.questionData}
            />
            <GetMessage
              key={index + 1}
              reply={element.reply}
              time={element.replyData}
            />
          </div>
        );
      })
    : null;

  return (
    <div className="field-coresspodence">
      <div
        className="field-coresspodence__body msg-cotainer"
        style={styleBody}
        id="scroll-container"
        ref={myRef}
      >
        {items}
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    correspodenceHeight: correspodenceHeightSelector(state),
    arrMesseges: arrPostGetMessage(state),
  };
};

export default connect(mapState)(FieldСorrespondence);
// function propsAreEqual(prevProps, nextProps) {
//   const boolValue = prevProps.arrMesseges === nextProps.arrMesseges;
//   return boolValue;
// }
// export default connect(
//   mapState,
//   null
// )(memo(FieldСorrespondence, propsAreEqual));

{
  /* <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptates id impedit facere, fugit assumenda neque maxime repellat nesciunt asperiores rerum minus, itaque accusamus porro error distinctio accusantium possimus natus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea veritatis perspiciatis ab assumenda voluptatibus ex vero ullam temporibus, ratione laboriosam, ipsam tempora soluta, exercitationem sequi rerum culpa quisquam nisi.
          </p> */
}

//Імпліментація прокрутки завдяки JS . Досконало зробити не вийшло

// const myRef = createRef();
// const [scrollPosition, setScrollPosition] = useState(0);

// const easeOutQuad = t => {
//   return t;
// };

// const smoothScrollTo = (distance, duration, element) => {
//   const startTime = performance.now();
//   const scrollStep = timestamp => {
//     const currentTime = timestamp - startTime < 0 ? 0 : timestamp - startTime;
//     // console.log('timestamp ' + timestamp);
//     // console.log('currentTime ' + currentTime);
//     // console.log('empty ');

//     const easing = easeOutQuad(currentTime / duration) + 0.8;
//     console.log('distance ' + easing);
//     const scrollToPosition = distance * easing;
//     // console.log('scrollToPosition ' + easing);
//     element.scrollTop = scrollToPosition;
//     if (currentTime < duration) {
//       requestAnimationFrame(scrollStep);
//     } else {
//       setScrollPosition(distance);
//     }
//   };
//   requestAnimationFrame(scrollStep);
// };

// //
// const getScrollTop = element => {
//   const scrollTop = element.scrollTop;
//   return scrollTop;
// };

// const getScrollHeightBody = element => {
//   const scrollHeight = element.scrollHeight;
//   return scrollHeight;
// };
// const getClientHeightBody = element => {
//   const clientHeight = element.clientHeight;
//   return clientHeight;
// };

// const scrollToPosition = () => {
//   const scrollHeight = getScrollHeightBody(myRef.current) || 0;
//   const scrollTop = getScrollTop(myRef.current) || 0;
//   const clientHeight = getClientHeightBody(myRef.current) || 0;
//   const difference = scrollHeight - scrollTop - 300;
//   // console.log('scrollTop ' + scrollTop);
//   console.log('scrollHeight ' + Math.round(scrollHeight / (scrollTop + 1)));
//   // smoothScrollTo(scrollHeight, 2500, myRef.current);
// };

// useEffect(() => {
//   scrollToPosition();
// }, [arrMesseges]);

// через стили установил єлементу "max-height: 30rem;"
// console.log(myRef.current.height) //
// console.log( correspodenceHeight) //
// myRef.current.height= correspodenceHeight;
// console.log(myRef.current.height); //
// console.log(correspodenceHeight); //

// max-height так и остался 30rem
