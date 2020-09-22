import Vue from 'vue'
Vue.filter('dateFilter', (value, format = 'longdate') => {
  const options = {}
  if (format.includes('longdate')) {
    options.day = 'numeric'
    options.month = 'short'
    options.year = 'numeric'
    options.hour = 'numeric'
    options.minute = '2-digit'
  }

  if (format.includes('datetime')) {
    options.hour = '2-digit'
    options.minute = '2-digit'
  }


  return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
})