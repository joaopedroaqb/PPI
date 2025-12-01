function validateGameBody(req, res, next) {
  const {
    title,
    genre,
    platform,
    releaseYear,
    rating,
    price,
    status
  } = req.body;

  const errors = [];

  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    errors.push('Field "title" is required and must be a non-empty string.');
  }

  if (!genre || typeof genre !== 'string' || genre.trim().length === 0) {
    errors.push('Field "genre" is required and must be a non-empty string.');
  }

  if (!platform || typeof platform !== 'string' || platform.trim().length === 0) {
    errors.push('Field "platform" is required and must be a non-empty string.');
  }

  const allowedStatus = ['OWNED', 'WISHLIST', 'PLAYING', 'FINISHED'];
  if (!status || typeof status !== 'string' || !allowedStatus.includes(status.toUpperCase())) {
    errors.push(`Field "status" is required and must be one of: ${allowedStatus.join(', ')}.`);
  }

  if (releaseYear !== undefined && releaseYear !== null) {
    if (!Number.isInteger(releaseYear)) {
      errors.push('Field "releaseYear" must be an integer.');
    } else {
      const currentYear = new Date().getFullYear();
      if (releaseYear < 1970 || releaseYear > currentYear) {
        errors.push(`Field "releaseYear" must be between 1970 and ${currentYear}.`);
      }
    }
  }

  if (rating !== undefined && rating !== null) {
    if (typeof rating !== 'number') {
      errors.push('Field "rating" must be a number.');
    } else if (rating < 0 || rating > 10) {
      errors.push('Field "rating" must be between 0 and 10.');
    }
  }

  if (price !== undefined && price !== null) {
    if (typeof price !== 'number') {
      errors.push('Field "price" must be a number.');
    } else if (price < 0) {
      errors.push('Field "price" cannot be negative.');
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({
      status: 400,
      errors
    });
  }

  next();
}

module.exports = validateGameBody;
