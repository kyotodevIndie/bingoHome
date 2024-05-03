<script setup lang="ts">
</script>

<template>
        <div className="bg-[#242624] rounded-lg p-10 flex flex-col ">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
          for="name"
          className="block mb-2 text-sm font-medium text-secondary"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className='w-100 bg-gray-200 text-tertiary text-sm rounded-lg focus:ring-primary focus:border-primary  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        </div>

        <div>
          <label
          for="email"
          className="block mb-2 text-sm font-medium text-secondary"
        >
        Email
        </label>
        <input
          type="text"
          id="email"
          className='w-100 bg-gray-200 text-tertiary text-sm rounded-lg focus:ring-primary focus:border-primary  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        </div>

        <div>
          <label
          for="company"
          className="block mb-2 text-sm font-medium text-secondary"
        >
        Company
        </label>
        <input
          type="text"
          id="company"
          className='w-100 bg-gray-200 text-tertiary text-sm rounded-lg focus:ring-primary focus:border-primary  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        </div>

        <div>
          <label
          for="phone"
          className="block mb-2 text-sm font-medium text-secondary"
        >
        Phone(optional)
        </label>
        <input
          type="text"
          id="phone"
          className='w-100 bg-gray-200 text-tertiary text-sm rounded-lg focus:ring-primary focus:border-primary  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        </div>

      </div>
      <div>
          <label
          for="company"
          className="block mb-2 text-sm font-medium text-secondary"
        >
        Subject
        </label>
        <input
          type="text"
          id="company"
          className='w-full bg-gray-200 text-tertiary text-sm rounded-lg focus:ring-primary focus:border-primary  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        </div>

      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-white mt-6"
      >
        Your message
      </label>
      <textarea
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
      <div className="flex justify-center">
        <Button className="mt-6">Send Message</Button>
      </div>
    </div>
</template>