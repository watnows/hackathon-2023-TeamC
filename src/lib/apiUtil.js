// 1. 日程調整
async function makeMsgToAdjustSchedule(
                                           newDatesArray,
                                           pastDate,
                                           companyName,
                                           contactPersonName,
                                           name,
                                           belonging,
                                           reason
                                       ) {

    const data = {
        new_date: newDatesArray,
        past_date: pastDate,
        company: companyName,
        contact_person_name: contactPersonName,
        name: name,
        belonging: belonging,
        reason: reason
    }

    const result = await sendCommonRequest(process.env.NEXT_PUBLIC_API_URL + '/api/adjust-schedule', data);
    return result;
}

// 2. お詫び
async function makeMsgToApology(company, contact_person_name, name, belonging, what, situation) {

    const data = {
        company: company,
        contact_person_name: contact_person_name,
        name: name,
        what: what,
        situation: situation,
        belonging: belonging
    }

    const result = await sendCommonRequest(process.env.NEXT_PUBLIC_API_URL + '/api/apology', data);
    return result;
}

// 3.内定辞退
async function makeMsgToAskToRefuse(company, contact_person_name, name, belonging, reason) {

    const data = {
        company: company,
        contact_person_name: contact_person_name,
        name: name,
        belonging: belonging,
        reason: reason
    }

    const result = await sendCommonRequest(process.env.NEXT_PUBLIC_API_URL + '/api/refusal', data);
    return result;
}

// 4.内定承諾
async function makeMsgToAskToReceiveOffer(company, contact_person_name, name, belonging) {

    const data = {
        company: company,
        contact_person_name: contact_person_name,
        name: name,
        belonging: belonging,
    }

    const result = await sendCommonRequest(process.env.NEXT_PUBLIC_API_URL + '/api/acceptance', data);
    return result;
}

// 5. お礼
async function makeMsgToThank(company, contact_person_name, name, belonging, reason) {

    const data = {
        company: company,
        contact_person_name: contact_person_name,
        name: name,
        reason: reason,
        belonging: belonging
    }

    const result = await sendCommonRequest(process.env.NEXT_PUBLIC_API_URL + '/api/thank', data);
    return result;
}


async function sendCommonRequest(url, sendData) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
    })

    if (!res.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await res.json();

    return data;
}

export {sendCommonRequest,makeMsgToAdjustSchedule, makeMsgToApology, makeMsgToAskToRefuse, makeMsgToAskToReceiveOffer, makeMsgToThank};
