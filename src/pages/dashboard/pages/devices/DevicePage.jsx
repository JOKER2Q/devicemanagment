import React from "react";
import { useParams } from "react-router-dom";
import "../css/Sidebar.css";

function DevicePage() {
    const { userId } = useParams(); // للحصول على معرف المستخدم من URL
    // استخدام معرف المستخدم لجلب بيانات المستخدم إذا كانت متوفرة في تطبيق حقيقي

    return (
        <div className="chat-page">
            <h2>Chat with User {userId}</h2>
            <div className="chat-content">
                {/* هنا يتم عرض الرسائل أو محتوى المحادثة */}
                <div className="message received">Hello! How are you?</div>
                <div className="message sent">I'm good, thanks! How about you?</div>
                <div className="message received">I'm doing well. Thanks for asking!</div>
                {/* إضافة المزيد من الرسائل حسب الحاجة */}
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type a message..." />
                <button>Send</button>
            </div>
        </div>
    );
}

export default DevicePage;
