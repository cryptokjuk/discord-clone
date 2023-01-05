"use client";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

function MainContent() {
  return (
    <div id="main-content">
      <header>
        <div className="header__text">
          <span>@</span>
          <p>AUTO BOT</p>
          <div className="online-indicator"></div>
        </div>
        <div className="header__icons">
          <div className="header__icon">
            <i className="ri-video-fill"></i>
          </div>
          <div className="header__icon">
            <i className="ri-flag-2-fill"></i>
          </div>
          <div className="header__icon">
            <i className="ri-user-add-fill"></i>
          </div>
          <div className="header__icon">
            <i className="ri-question-fill"></i>
          </div>
          <div className="header__icon1">
            <input
              type="text"
              className="header__search"
              placeholder=" Search"
            />
          </div>
          <div className="header__icon">
            <i className="ri-inbox-archive-line"></i>
          </div>
          <div className="header__icon">
            <i className="ri-delete-bin-fill"></i>
          </div>
        </div>
      </header>
      <MessageList />
      <ChatInput />
    </div>
  );
}

export default MainContent;
