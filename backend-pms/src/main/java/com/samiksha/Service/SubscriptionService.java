package com.samiksha.Service;

import com.samiksha.modal.PlanType;
import com.samiksha.modal.Subscription;
import com.samiksha.modal.User;

public interface SubscriptionService {

    Subscription createSubscription(User user);

    Subscription getUserSubscription(Long userId) throws Exception;

    Subscription upgradeSubscription(Long userId , PlanType planType);

    boolean isValid(Subscription subscription);
}
