module.exports = {
    remainingDays(job) {
        // calculo de tempo restante
    
        //calculo dos dias para finalizar o job
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
    
        //data da criação do job
        const createdDate = new Date(job.created_at)
    
        //data da finalização do job
        const dueDay = createdDate.getDate() + Number(remainingDays)
    
        const dueDateInMs = createdDate.setDate(dueDay)
            
        const timeDiffInMs = dueDateInMs - Date.now() 
    
        //transformar millisegundos em dias 
        const dayInMilli = 1000 * 60 * 60 * 24
    
        const dayDiff = Math.ceil(timeDiffInMs / dayInMilli)
    
        return dayDiff
    },

    calculateBudget: (job, valueHour) => valueHour * job["total-hours"],

    calculateValueInProgress(jobs) {
        let valueInProgress = 0;
        
        jobs.map((job) => {
            valueInProgress = job.status == 'progress' ? valueInProgress + job.budget : valueInProgress
        
        })
        
        return valueInProgress
    }
}; 