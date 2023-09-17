async function makeMsgToAdjustSchedule({newDatesArray, pastDate, companyName, contactPersonName, name, reason}) {

    const data = {
        new_date: newDatesArray,
        past_date: pastDate,
        company_name: companyName,
        contact_person_name: contactPersonName,
        name: name,
        reason: reason
    }

    const result = await sendCommonRequest(process.env.NEXT_PUBLIC_API_URL + '/api/adjust-schedule', data);
    return result;
}


async function makeMsgToApology({company, contact_person_name, name, what, situation}) {

    const data = {
        company: company,
        contact_person_name: contact_person_name,
        name: name,
        what: what,
        situation: situation
    }

    const result = await sendCommonRequest(process.env.NEXT_PUBLIC_API_URL + '/api/apology', data);
    return result;
}

async function makeMsgToAskToRefuse({company, contact_person_name, name, reason}) {

        const data = {
            company: company,
            contact_person_name: contact_person_name,
            name: name,
            reason: reason
        }

        const result = await sendCommonRequest(process.env.NEXT_PUBLIC_API_URL + '/api/refusal', data);
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